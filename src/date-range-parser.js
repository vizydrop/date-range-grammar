'use strict';

const antlr4 = require('antlr4');
const addMinutes = require('date-fns/addMinutes/index');
const {DateRangeLexer} = require('./generated/DateRangeLexer');
const {DateRangeParser} = require('./generated/DateRangeParser');
const {LexerErrorListener, ParserErrorListener} = require('./errors-processing');
const DateRangeParserError = require('./date-range-parser-error');
const DateRangeParserVisitor = require('./parse-tree-to-date-range');
const {timezoneOffsetToMinutes} = require(`./timezone-parser`);

const isTimezoneOffset = (timezone) => /[+-][0-9]{2}:[0-9]{2}/g.test(timezone);
const isZeroTimezoneOffset = (timezone) => /[+-]*00:00/g.test(timezone);
const getTimezoneOffset = (date) => (date).getTimezoneOffset() * 60000;

const toResultWithTimezone = (date, timezone) => {
    if (date && isTimezoneOffset(timezone) && !isZeroTimezoneOffset(timezone)) {
        return date.replace(`Z`, timezone);
    }

    return date;
};

const formatResult = ({min, max}, timezone) => ({
    _min: toResultWithTimezone(min && new Date(min.getTime() - getTimezoneOffset(min)).toISOString(), timezone),
    _max: toResultWithTimezone(max && new Date(max.getTime() - getTimezoneOffset(max)).toISOString(), timezone)
});

const parse = (text) => {
    const stream = new antlr4.InputStream(text);
    const lexer = new DateRangeLexer(stream);

    const lexerErrorListener = new LexerErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);

    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new DateRangeParser(tokenStream);

    const parserErrorListener = new ParserErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrorListener);

    parser.buildParseTrees = true;

    const parseTree = parser.mainExpression();
    return {parseTree, hasErrors: lexerErrorListener.hasErrors || parserErrorListener.hasErrors};
};

// timezone example +/-03:00
const applyTimezone = (date, timezone) => {
    const dateWithoutLocalTimezoneOffset = addMinutes(date, date.getTimezoneOffset());

    if (!isTimezoneOffset(timezone)) {
        return dateWithoutLocalTimezoneOffset;
    }

    const offsetInMinutes = timezoneOffsetToMinutes(timezone);
    return addMinutes(dateWithoutLocalTimezoneOffset, offsetInMinutes);
};

const parseDateRange = (text, relativeDate, timezone) => {
    const {parseTree, hasErrors} = parse(text);

    if (hasErrors) {
        throw new DateRangeParserError('Wrong format is set for Date Range');
    }

    const dateWithTimezone = applyTimezone(relativeDate, timezone);
    const visitor = new DateRangeParserVisitor(dateWithTimezone);
    return formatResult(visitor.visit(parseTree)[0], timezone);
};

module.exports = {
    parseDateRange
};
