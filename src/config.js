require("dotenv").config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
  },
};
module.exports = config;
