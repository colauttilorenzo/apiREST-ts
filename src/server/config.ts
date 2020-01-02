import { SdkConfig } from "../base-object/ business-object/_sdk/sdk-config";
import '../base-object/extensions/object-extension';

export class Config {

    private static readonly environment = process.env.NODE_ENV || 'development';
    private static readonly json = require((Config.environment == 'development' ? '../_environment/config.' + Config.environment + '.json' : '../config.json'));

    // Config.get();
    public static get(): SdkConfig {
        let configuration = Object.cast(Config.json, SdkConfig);
        return configuration;
    }

}