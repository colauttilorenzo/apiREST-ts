import { STRING, UUIDV4, UUID } from "sequelize";
import { Config } from "../base-object/ business-object/config";
import { RepositoryBase } from "../base-object/repository-base";

export class ConfigModelLogic extends RepositoryBase {

    public constructor() {
        super();

        Config.init(
            {
                id: {
                    type: UUID,
                    defaultValue: UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                dscr: {
                    type: STRING,
                    allowNull: true
                }
            },
            {
                sequelize: this.connection,
                underscored: true,
                timestamps: false,
                tableName: 'config'
            }
        );

    }

    public async findAll(whereClause: any = undefined): Promise<Config[]> {
        const data = await Config.findAll(whereClause);
        return data;
    }

}