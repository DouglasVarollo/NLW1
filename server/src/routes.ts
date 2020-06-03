import express from "express";

import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();

routes.get("/items", ItemsController.index);

routes.get("/points", PointsController.index);
routes.post("/points", PointsController.create);
routes.get("/points/:id", PointsController.show);

export default routes;
