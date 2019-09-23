'use strict';

const getSign = (timezone) => timezone.startsWith(`-`) ? -1 : 1;
const getHours = (timezone) => parseInt(timezone.slice(1, 3), 10);
const getMinutes = (timezone) => parseInt(timezone.slice(4, 6), 10);

const timezoneOffsetToMinutes = (timezone) => {
    const sign = getSign(timezone);
    const hoursInMinutes = getHours(timezone) * 60;
    const minutes = getMinutes(timezone);

    return sign * (hoursInMinutes + minutes);
};

module.exports = {
    timezoneOffsetToMinutes
};
