import express from "express";
import userRoutes from "./userRoutes.js";

const router = express.Router();

export default () => {
  userRoutes(router);

  return router;
};
