import dotenv from "dotenv";

dotenv.config({ path: "./.env"})

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

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    MONGO_DB_URI_TEST: process.env.MONGO_DB_URI_TEST,
    SECRET: process.env.SECRET ? Number(process.env.SECRET) : undefined
  };
};

const config = getConfig();

export default config;