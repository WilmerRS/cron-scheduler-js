import bodyParser from "body-parser";
import compress from "compression";
import errorHandler from "errorhandler";
import express, { Request, Response } from "express";
import Router from "express-promise-router";
import helmet from "helmet";
import httpStatus from "http-status";
import path from "path";

import { loadApiEndpoints } from "./routes/api/v1/api.route";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(compress());

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

const router = Router();
router.use(errorHandler());
app.use(router);
loadApiEndpoints(router);

router.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
});

export default app;
