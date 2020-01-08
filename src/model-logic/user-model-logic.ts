import { STRING, UUIDV4, UUID } from "sequelize";
import { User } from "../base-object/ business-object/user";
import { RepositoryBase } from "../base-object/repository-base";

export class UserModelLogic extends RepositoryBase {

    public constructor() {
        super();

        User.init(
            {
                id: {
                    type: UUID,
                    defaultValue: UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                mail: {
                    type: STRING,
                    allowNull: false
                },
                dscr: {
                    type: STRING,
                    allowNull: true
                },
                pass: {
                    type: STRING,
                    allowNull: false
                }
            },
            {
                sequelize: this.connection,
                underscored: true,
                timestamps: false,
                tableName: 'users'
            }
        );

    }

    public async findAll(whereClause: any = undefined): Promise<User[]> {
        const data = await User.findAll(whereClause);
        return data;
    }

    public async findByUsernameAndPassword(username: string, password: string): Promise<User> {
        const data = await User.findAll({
            where: {
                mail: username,
                pass: password
            }
        });

        return data![0];
    }

}