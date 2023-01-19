const dotenv = require("dotenv");

dotenv.config();

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const { initDB } = require("./models");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

try {
  await initDB();

  console.log("Connection has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database.", err);
}

const app = next({ dev, hostname: "localhost", port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url || "", true);

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
