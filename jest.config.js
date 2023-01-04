module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  testTimeout: 20000,
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium', 'firefox'],
      launchOptions: {
        //headless: false,
        // slowMo: 600,
      },
    },
  },
};
