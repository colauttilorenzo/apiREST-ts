import { Model, Association } from "sequelize";
import { User } from "./user";

export class Login extends Model {

    public id!: string;
    public userId!: string;
    public expires!: number;

    // auditing
    public readonly createdAt!: Date;
    public readonly createdBy!: string;
    public readonly updatedAt!: Date;
    public readonly updatedBy!: string;

    // references
    public readonly user?: User;

    // static properties for references
    public static associations: {
        user: Association<Login, User>;
    };

}