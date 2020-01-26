import * as dotenv from 'dotenv';

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: string,
    }
  }
}

export enum SupportedEnv {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

const isSupportedEnv = (env: string): boolean => {
  return Object.values(SupportedEnv).some(supportedEnv => supportedEnv === env);
}

export const loadEnvVariables = (env: string) => {
  if (isSupportedEnv(env) === false) {
    throw new Error("Unsupported enviroment")
  }

  dotenv.config({ path: `${__dirname}/../.env.${env}`});
  console.log(`* ${env} * environment variables have been loaded.`);
}