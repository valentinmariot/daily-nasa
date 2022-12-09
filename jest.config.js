module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
    globals: {
        "ts-jest": {
          isolatedModules: true,
        },
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };
  