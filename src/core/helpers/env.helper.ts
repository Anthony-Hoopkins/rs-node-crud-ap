import { parseArgs } from './parse.helper.js';
import path from 'path';
import { readFileSync } from 'fs';

export const getPortViaEnv = () => {
  try {
    const env = parseArgs()?.['env'] || null;
    const envPath = path.join(process.cwd(), env);

    const fileInfo = readFileSync(envPath);
    const port = fileInfo.toString().split('=')[1];

    if (port && typeof (+port) === 'number') {
      return port;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
