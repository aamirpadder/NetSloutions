module.exports = {
  //   preset: 'react-native',
  preset: 'react-native',
  // setupFiles: ['<rootDir>/jest.setup.js'],

  testMatch: ['**/?(*.)+(spec|test).(js|ts|tsx)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation|@react-native/.*|react-navigation|react-native-webview|react-redux|@react-native-community/async-storage)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  // modulePaths: ['<rootDir>'],
  // verbose: true,
  coverageReporters: ['text-summary', 'html'],
};
