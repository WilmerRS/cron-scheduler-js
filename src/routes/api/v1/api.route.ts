import { Router } from "express";

import { register as registerStatusRouter } from "../../../apps/scheduler/routes/status.route";
import { register as registerTaskRouter } from "../../../apps/scheduler/routes/tasks.route";

export const loadApiEndpoints = (app: Router): void => {
  const apiPrefixV1 = "/api/v1";
  registerStatusRouter(app, apiPrefixV1);
  registerTaskRouter(app, apiPrefixV1);
};
