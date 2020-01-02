import { Sequelize } from "sequelize";
import { Config } from "../server/config";
import { SdkConfig } from "./ business-object/_sdk/sdk-config";

export class RepositoryBase {

    protected readonly connection: Sequelize;

    protected constructor() {
        const config: SdkConfig = Config.get();
        const _dialect: any = config.database.server.dialect;

        this.connection = new Sequelize(
            config.database.name ?? '',
            config.database.auth.username ?? '',
            config.database.auth.password ?? '',
            {
                host: config.database.server.host ?? '',
                dialect: _dialect
            }
        );
    }

}