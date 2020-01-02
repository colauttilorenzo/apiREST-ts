import { Model } from 'sequelize';

export class User extends Model {

    public id!: string;
    public mail!: string;
    public dscr!: string;
    public pass!: string;

    // auditing
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}