import { Model, DataTypes } from "sequelize";
import db from "./index";

export class Node extends Model {
    public id!: number;
    public name!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export interface NodeInterface {
    name: string;
}

Node.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(),
            allowNull: false
        }
    },
    {
        tableName: "nodes",
        sequelize: db.sequelize
    }
);