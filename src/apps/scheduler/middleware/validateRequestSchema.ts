import { Request, Response } from "express";
import { ValidationError, validationResult } from "express-validator";
import httpStatus from "http-status";

const validateRequestSchemaMiddleware = (
  req: Request,
  response: Response,
  next: Function
) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    next();
  }

  const errors = validationErrors.array().map((error: ValidationError) => ({
    [error.param]: error.msg,
  }));

  return response.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors,
  });
};

export default validateRequestSchemaMiddleware;