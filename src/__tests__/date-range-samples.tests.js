'use strict';

const {parseDateRange} = require('../date-range-parser');
const dateRangeSamples = require('../date-range-samples');

describe('Date Range Samples', () => {
    it('should check samples', () => {
        dateRangeSamples.forEach((sample) => {
            expect(Boolean(sample.title)).toEqual(true);
            expect(Boolean(sample.value)).toEqual(true);

            const parsedValue = parseDateRange(sample.value, new Date());

            expect(parsedValue).toHaveProperty('_min');
            expect(parsedValue).toHaveProperty('_max');
        });
    });
});
