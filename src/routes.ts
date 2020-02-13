import express from "express";
import { NodesController } from "./app/controllers/NodesController";

export class Routes {
    public nodesController: NodesController = new NodesController();

    public routes(app: express.Application): void {
        app.route("/").get(this.nodesController.index);

        app.route("/nodes")
            .get(this.nodesController.index)
            .post(this.nodesController.store);

        app.route("/nodes/:id")
            .get(this.nodesController.show)
            .put(this.nodesController.update)
            .delete(this.nodesController.delete);
    }
}