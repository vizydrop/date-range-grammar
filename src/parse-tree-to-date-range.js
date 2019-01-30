'use strict';

const startOfDay = require('date-fns/startOfDay/index');
const endOfDay = require('date-fns/endOfDay/index');
const addDays = require('date-fns/addDays/index');
const subDays = require('date-fns/subDays/index');
const parse = require('date-fns/parse/index');
const isValid = require('date-fns/isValid/index');
const startOfISOWeek = require('date-fns/startOfISOWeek/index');
const endOfISOWeek = require('date-fns/endOfISOWeek/index');
const startOfMonth = require('date-fns/startOfMonth/index');
const endOfMonth = require('date-fns/endOfMonth/index');
const startOfQuarter = require('date-fns/startOfQuarter/index');
const endOfQuarter = require('date-fns/endOfQuarter/index');
const startOfYear = require('date-fns/startOfYear/index');
const endOfYear = require('date-fns/endOfYear/index');
const addWeeks = require('date-fns/addWeeks/index');
const subWeeks = require('date-fns/subWeeks/index');
const addMonths = require('date-fns/addMonths/index');
const subMonths = require('date-fns/subMonths/index');
const addQuarters = require('date-fns/addQuarters/index');
const subQuarters = require('date-fns/subQuarters/index');
const addYears = require('date-fns/addYears/index');
const subYears = require('date-fns/subYears/index');
const subMilliseconds = require('date-fns/subMilliseconds/index');

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
const checkInterval = (min, max) => {
    if (min > max) {
        throw new DateRangeParserError('The start date of the date range should be earlier than the end date');
    }
};

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

        checkInterval(min, max);

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

    visitFrom(ctx) {
        const {min} = this.visit(ctx.date);
        return toResult(min, null);
    }

    visitTo(ctx) {
        const {min} = this.visit(ctx.date);
        const resDate = endOfDay(min);

        return toResult(null, resDate);
    }

    visitFromTo(ctx) {
        const {min: from} = this.visit(ctx.dateFrom);
        const {min: to} = this.visit(ctx.dateTo);
        const minRes = endOfDay(to);

        checkInterval(from, minRes);

        return toResult(from, minRes);
    }
}

module.exports = ParseTreeToDateRangeVisitor;
