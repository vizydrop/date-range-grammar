'use strict';

class DateRangeParserError extends Error {
    constructor(message) {
        super();
        Error.captureStackTrace(this, DateRangeParserError);

        this.message = message;
    }
}

module.exports = DateRangeParserError;
