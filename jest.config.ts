import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
};

export default config;