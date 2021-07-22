export default {
  clearMocks: true,
  coverageProvider: 'v8',
  transform: { '\\.ts$': ['ts-jest'] },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  preset: 'ts-jest',
};
