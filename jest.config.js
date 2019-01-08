'use strict';

module.exports = {
    testRegex: '.*tests.js$',
    coverageThreshold: {
        global: {
            lines: 100,
            statements: 100,
            functions: 100,
            branches: 100
        }
    },
    coveragePathIgnorePatterns: [
        'src/generated/'
    ],
    coverageDirectory: './coverage',
    coverageReporters: ['html']
};
