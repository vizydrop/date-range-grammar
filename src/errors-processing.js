const antlr4 = require('antlr4');

class LexerErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.hasErrors = false;
    }

    syntaxError() {
        this.hasErrors = true;
    }
}

class ParserErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.hasErrors = false;
    }

    syntaxError() {
        this.hasErrors = true;
    }
}

module.exports = {
    LexerErrorListener,
    ParserErrorListener
};
