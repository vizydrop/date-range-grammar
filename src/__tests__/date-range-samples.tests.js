'use strict';

const dateRangeSamples = require('../date-range-samples');

describe('Date Range Samples', () => {
    it('should check samples', () => {
        dateRangeSamples.forEach((sample) => {
            expect(Boolean(sample.title)).toEqual(true);
            expect(Boolean(sample.value)).toEqual(true);
        });
    });
});
