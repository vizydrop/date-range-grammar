'use strict';

const antlr4 = require('antlr4');
const {DateRangeLexer} = require('./generated/DateRangeLexer');
const {DateRangeParser} = require('./generated/DateRangeParser');
const {LexerErrorListener, ParserErrorListener} = require('./errors-processing');
const DateRangeParserError = require('./date-range-parser-error');
const DateRangeParserVisitor = require('./parse-tree-to-date-range');

const getTimezoneOffset = (date) => (date).getTimezoneOffset() * 60000;

const formatResult = ({min, max}) => ({
    _min: min && new Date(min.getTime() - getTimezoneOffset(min)).toISOString(),
    _max: max && new Date(max.getTime() - getTimezoneOffset(max)).toISOString()
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

const parseDateRange = (text, relativeDate) => {
    const {parseTree, hasErrors} = parse(text);

    if (hasErrors) {
        throw new DateRangeParserError('Wrong format is set for Date Range');
    }

    const visitor = new DateRangeParserVisitor(relativeDate);
    return formatResult(visitor.visit(parseTree)[0]);
};

module.exports = {
    parseDateRange
};
