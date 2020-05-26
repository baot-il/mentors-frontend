module.exports = {
    setupFilesAfterEnv: ['jest-enzyme', '<rootDir>/src/test/setupTests.js'],
    testEnvironment: 'enzyme',
    verbose: true,
    testURL: 'http://localhost/',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/.*)'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    reporters: ['default'],
};
