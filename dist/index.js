const dotenv = require("dotenv");

dotenv.config();

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const { initDB } = require("./models");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

async function bootstrap() {
  try {
    await initDB();

    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database.", err);
  }

  const app = next({ dev });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url || "", true);
      handle(req, res, parsedUrl);
    }).listen(port);

    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
}

bootstrap();
