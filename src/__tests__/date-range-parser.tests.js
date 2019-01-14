'use strict';

const {parseDateRange} = require('../date-range-parser');
const DateRangeParserError = require('../date-range-parser-error');

describe('Date Range Parser', () => {
    const CURRENT_DATE = new Date('2017-06-13');

    it('should correctly parse strings', () => {
        const tests = [
            ['TODAY', {_min: '2017-06-13T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['YESTERDAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['10 Jan 2017', {_min: '2017-01-10T00:00:00.000Z', _max: '2017-01-10T23:59:59.999Z'}],
            ['10 January 2017', {_min: '2017-01-10T00:00:00.000Z', _max: '2017-01-10T23:59:59.999Z'}],
            ['10-Jan-2017', {_min: '2017-01-10T00:00:00.000Z', _max: '2017-01-10T23:59:59.999Z'}],
            ['10-January-2017', {_min: '2017-01-10T00:00:00.000Z', _max: '2017-01-10T23:59:59.999Z'}],
            ['THIS   DAY', {_min: '2017-06-13T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['this   WEEK', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-18T23:59:59.999Z'}],
            ['THIS   MONTH', {_min: '2017-06-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['THIS   QUARTER', {_min: '2017-04-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['THIS   YEAR', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-12-31T23:59:59.999Z'}],
            ['LAST   DAY', {_min: '2017-06-13T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['LAST   WEEK', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-18T23:59:59.999Z'}],
            ['LAST   MONTH', {_min: '2017-06-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['LAST   QUARTER', {_min: '2017-04-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['LAST   YEAR', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-12-31T23:59:59.999Z'}],
            ['LAST 1 DAYS', {_min: '2017-06-13T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['LAST 1 WEEKS', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-18T23:59:59.999Z'}],
            ['LAST 1 MONTHS', {_min: '2017-06-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['LAST 1 QUARTERS', {_min: '2017-04-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['LAST 1 YEARS', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-12-31T23:59:59.999Z'}],
            ['LAST 3 DAYS', {_min: '2017-06-11T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['LAST 3 WEEKS', {_min: '2017-05-29T00:00:00.000Z', _max: '2017-06-18T23:59:59.999Z'}],
            ['LAST 3 MONTHS', {_min: '2017-04-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['LAST 3 QUARTERS', {_min: '2016-10-01T00:00:00.000Z', _max: '2017-06-30T23:59:59.999Z'}],
            ['LAST 3 YEARS', {_min: '2015-01-01T00:00:00.000Z', _max: '2017-12-31T23:59:59.999Z'}],
            ['PREVIOUS   DAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['PREVIOUS   WEEK', {_min: '2017-06-05T00:00:00.000Z', _max: '2017-06-11T23:59:59.999Z'}],
            ['PREVIOUS   MONTH', {_min: '2017-05-01T00:00:00.000Z', _max: '2017-05-31T23:59:59.999Z'}],
            ['PREVIOUS   QUARTER', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-03-31T23:59:59.999Z'}],
            ['PREVIOUS   YEAR', {_min: '2016-01-01T00:00:00.000Z', _max: '2016-12-31T23:59:59.999Z'}],
            ['PREVIOUS 1 DAYS', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['PREVIOUS 1 WEEKS', {_min: '2017-06-05T00:00:00.000Z', _max: '2017-06-11T23:59:59.999Z'}],
            ['PREVIOUS 1 MONTHS', {_min: '2017-05-01T00:00:00.000Z', _max: '2017-05-31T23:59:59.999Z'}],
            ['PREVIOUS 1 QUARTERS', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-03-31T23:59:59.999Z'}],
            ['PREVIOUS 1 YEARS', {_min: '2016-01-01T00:00:00.000Z', _max: '2016-12-31T23:59:59.999Z'}],
            ['PREVIOUS 3 DAYS', {_min: '2017-06-10T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['PREVIOUS 3 WEEKS', {_min: '2017-05-22T00:00:00.000Z', _max: '2017-06-11T23:59:59.999Z'}],
            ['PREVIOUS 3 MONTHS', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-05-31T23:59:59.999Z'}],
            ['PREVIOUS 3 QUARTERS', {_min: '2016-07-01T00:00:00.000Z', _max: '2017-03-31T23:59:59.999Z'}],
            ['PREVIOUS 3 YEARS', {_min: '2014-01-01T00:00:00.000Z', _max: '2016-12-31T23:59:59.999Z'}],
            ['BETWEEN 1 January 2016 AND 1 January 2016', {_min: '2016-01-01T00:00:00.000Z', _max: '2016-01-01T23:59:59.999Z'}],
            ['BETWEEN 1 January 2016 AND 5 January 2016', {_min: '2016-01-01T00:00:00.000Z', _max: '2016-01-05T23:59:59.999Z'}],
            ['BETWEEN          TODAY AND TODAY', {_min: '2017-06-13T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN      YESTERDAY AND TODAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN        DAY AGO AND TODAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN       WEEK AGO AND TODAY', {_min: '2017-06-05T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN      MONTH AGO AND TODAY', {_min: '2017-05-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN    QUARTER AGO AND TODAY', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN    YEAR AGO AND TODAY', {_min: '2016-01-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 1     DAYS AGO AND TODAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 1    WEEKS AGO AND TODAY', {_min: '2017-06-05T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 1    MONTHS AGO AND TODAY', {_min: '2017-05-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 1    QUARTERS AGO AND TODAY', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 1    YEARS AGO AND TODAY', {_min: '2016-01-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 3     DAYS AGO AND TODAY', {_min: '2017-06-10T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 3    WEEKS AGO AND TODAY', {_min: '2017-05-22T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 3    MONTHS AGO AND TODAY', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 3    QUARTERS AGO AND TODAY', {_min: '2016-07-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 3    YEARS AGO AND TODAY', {_min: '2014-01-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN      YESTERDAY AND YESTERDAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN        DAY AGO AND YESTERDAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN       WEEK AGO AND YESTERDAY', {_min: '2017-06-05T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN       MONTH AGO AND YESTERDAY', {_min: '2017-05-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN       QUARTER AGO AND YESTERDAY', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN       YEAR AGO AND YESTERDAY', {_min: '2016-01-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 1     DAYS AGO AND YESTERDAY', {_min: '2017-06-12T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 1     WEEKS AGO AND YESTERDAY', {_min: '2017-06-05T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 1     MONTHS AGO AND YESTERDAY', {_min: '2017-05-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 1     QUARTERS AGO AND YESTERDAY', {_min: '2017-01-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 1     YEARS AGO AND YESTERDAY', {_min: '2016-01-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 3     DAYS AGO AND YESTERDAY', {_min: '2017-06-10T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 3     WEEKS AGO AND YESTERDAY', {_min: '2017-05-22T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 3     MONTHS AGO AND YESTERDAY', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 3     QUARTERS AGO AND YESTERDAY', {_min: '2016-07-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 3     YEARS AGO AND YESTERDAY', {_min: '2014-01-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 3 MONTHS AGO AND 2 MONTHS AGO', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-03-31T23:59:59.999Z'}],
            ['BETWEEN 3 MONTHS AGO AND TODAY', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-06-13T23:59:59.999Z'}],
            ['BETWEEN 3 MONTHS AGO AND YESTERDAY', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-06-12T23:59:59.999Z'}],
            ['BETWEEN 3 MONTHS AGO AND 2 DAYS AGO', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-06-10T23:59:59.999Z'}],
            ['BETWEEN 3 MONTHS AGO AND 1 Dec 2017', {_min: '2017-03-01T00:00:00.000Z', _max: '2017-12-01T23:59:59.999Z'}],
            ['FROM 1 Dec 2010', {_min: '2010-12-01T00:00:00.000Z', _max: null}],
            ['FROM YESTERDAY', {_min: '2017-06-12T00:00:00.000Z', _max: null}],
            ['TO 1 Dec 2010', {_min: null, _max: '2010-12-01T00:00:00.000Z'}],
            ['TO TODAY', {_min: null, _max: '2017-06-13T00:00:00.000Z'}],
            ['from 1 Dec 2010 to 1 Oct 2011', {_min: '2010-12-01T00:00:00.000Z', _max: '2011-10-01T00:00:00.000Z'}]
        ];

        tests.forEach(([value, result]) => {
            expect(parseDateRange(value, CURRENT_DATE)).toEqual(result);
        });
    });

    it('should throw errors on invalid cases', () => {
        expect(() => parseDateRange('this TEST', CURRENT_DATE)).toThrowError(new DateRangeParserError('Wrong format is set for Date Range'));
        expect(() => parseDateRange('test', CURRENT_DATE)).toThrowError(new DateRangeParserError('Wrong format is set for Date Range'));
        expect(() => parseDateRange('10 Test 2017', CURRENT_DATE)).toThrowError(new DateRangeParserError('Invalid date is set in Date Range'));
        expect(() => parseDateRange('from 01-Jan-2010 to 01-Jan-2008', CURRENT_DATE)).toThrowError(new DateRangeParserError('The start date of the date range should be earlier than the end date'));
        expect(() => parseDateRange('BETWEEN 5 January 2016 AND 1 January 2016', CURRENT_DATE)).toThrowError(new DateRangeParserError('The start date of the date range should be earlier than the end date'));
    });
});
