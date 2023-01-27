import mysql from "mysql";
import util from "util";

import config from "./config";

export const connection = mysql.createConnection({
  host: config.DATABASE_HOST,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
});

export const query = util.promisify(connection.query).bind(connection);
