import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: "./.env"})
// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
  MONGO_DB_URI: string | undefined;
  MONGO_DB_URI_TEST: string | undefined;
  SECRET: number | undefined;
}

interface Config {
  NODE_ENV: string;
  PORT: number;
  MONGO_DB_URI: string;
  MONGO_DB_URI_TEST: string;
  SECRET: number;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    MONGO_DB_URI_TEST: process.env.MONGO_DB_URI_TEST,
    SECRET: process.env.SECRET ? Number(process.env.SECRET) : undefined
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

// const getSanitzedConfig = (config: ENV): Config => {
//   for (const [key, value] of Object.entries(config)) {
//     if (value === undefined) {
//       throw new Error(`Missing key ${key} in config.env`);
//     }
//   }
//   return config as Config;
// };

const config = getConfig();

// const sanitizedConfig = getSanitzedConfig(config);

export default config;