'use strict';

const {timezoneOffsetToMinutes} = require('../timezone-parser');

describe('Timezone parser', () => {
    it('should convert timezone offset to minutes', () => {
        expect(timezoneOffsetToMinutes(`+00:00`)).toEqual(0);
        expect(timezoneOffsetToMinutes(`+03:00`)).toEqual(180);
        expect(timezoneOffsetToMinutes(`-03:00`)).toEqual(-180);
        expect(timezoneOffsetToMinutes(`-01:45`)).toEqual(-105);
    });
});
