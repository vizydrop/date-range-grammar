'use strict';

const {
    startOfDay, endOfDay, addDays, subDays, parse, isValid, startOfISOWeek, endOfISOWeek,
    startOfMonth, endOfMonth, startOfQuarter, endOfQuarter, startOfYear, endOfYear, addWeeks, subWeeks,
    addMonths, subMonths, addQuarters, subQuarters, addYears, subYears, subMilliseconds
} = require('date-fns');
const DateRangeParserError = require('./date-range-parser-error');
const {DateRangeParserVisitor} = require(`./generated/DateRangeParserVisitor`);

const AVAILABLE_DATE_FORMATS = ['dd MMMM yyyy', 'dd MMM yyyy', 'dd-MMMM-yyyy', 'dd-MMM-yyyy'];
const INTERVAL_DATE_FNS_MAP = {
    day: {start: startOfDay, end: endOfDay, add: addDays, sub: subDays},
    week: {start: startOfISOWeek, end: endOfISOWeek, add: addWeeks, sub: subWeeks},
    month: {start: startOfMonth, end: endOfMonth, add: addMonths, sub: subMonths},
    quarter: {start: startOfQuarter, end: endOfQuarter, add: addQuarters, sub: subQuarters},
    year: {start: startOfYear, end: endOfYear, add: addYears, sub: subYears}
};
const intervalToDateFns = (interval) => INTERVAL_DATE_FNS_MAP[interval];
const toResult = (min, max) => ({min, max});

class ParseTreeToDateRangeVisitor extends DateRangeParserVisitor {
    constructor(date) {
        super();
        this.date = date;
    }

    visitBasicDate(ctx) {
        return this.visit(ctx.date);
    }

    visitBasicDateBetween(ctx) {
        return this.visit(ctx.date);
    }

    visitToday() {
        const {date} = this;
        const {start, end} = intervalToDateFns('day');

        return toResult(start(date), end(date));
    }

    visitYesterday(ctx) {
        const {start, end, sub} = intervalToDateFns('day');
        const resDate = sub(this.date, 1);

        return toResult(start(resDate), end(resDate));
    }

    visitDate(ctx) {
        const date = ctx.date.text;
        const format = AVAILABLE_DATE_FORMATS.find((format) => isValid(parse(date, format, this.date)));

        if (format) {
            const resDate = parse(date, format, this.date);
            return toResult(startOfDay(resDate), endOfDay(resDate));
        }

        throw new DateRangeParserError('Invalid date is set in Date Range');
    }

    visitCurrentInterval(ctx) {
        const {date} = this;
        const {start, end} = this.visit(ctx.interval);

        return toResult(start(date), end(date));
    }

    visitLastNumericInterval(ctx) {
        const {date} = this;
        const {num, start, end, sub} = this.visit(ctx.interval);
        const resDate = sub(start(date), num - 1);

        return toResult(start(resDate), end(date));
    }

    visitPreviousInterval(ctx) {
        const {start, end, sub} = this.visit(ctx.interval);
        const resDate = sub(start(this.date), 1);

        return toResult(start(resDate), end(resDate));
    }

    visitPreviousNumericInterval(ctx) {
        const {num, start, end, add, sub} = this.visit(ctx.interval);
        const resDate = sub(start(this.date), num);

        return toResult(start(resDate), end(add(resDate, num - 1)));
    }

    visitInterval(ctx) {
        return intervalToDateFns(ctx.interval.text.toLowerCase());
    }

    visitNumericInterval(ctx) {
        const {interval, num} = ctx;

        return {
            ...intervalToDateFns(interval.text.toLowerCase().slice(0, -1)),
            num: parseInt(num.text, 10)
        };
    }

    visitBetween(ctx) {
        const {min} = this.visit(ctx.min);
        const {max} = this.visit(ctx.max);

        if (min > max) {
            throw new DateRangeParserError('The start date of the date range should be earlier than the end date');
        }

        return toResult(min, max);
    }

    visitIntervalAgo(ctx) {
        const {start, sub} = this.visit(ctx.interval);
        const resDate = start(sub(start(this.date), 1));

        return toResult(resDate, subMilliseconds(resDate, 1));
    }

    visitNumericIntervalAgo(ctx) {
        const {start, sub, num} = this.visit(ctx.interval);
        const resDate = start(sub(start(this.date), num));

        return toResult(resDate, subMilliseconds(resDate, 1));
    }
}

module.exports = ParseTreeToDateRangeVisitor;
