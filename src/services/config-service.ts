import { ServiceBase } from "../base-object/service-base";
import { HttpVerb } from "../base-object/ business-object/_sdk/http-verb";
import { ConfigModelLogic } from "../model-logic/config-model-logic";

export class ConfigService extends ServiceBase {

    public constructor() {
        super('config');

        this.service(this.getList, HttpVerb.GET, '/get');
    }

    private getList(req: any, res: any): any {

        new ConfigModelLogic().findAll().then((data: any) => {

            res.send(data);

        }).catch((data: any) => {

            res.statusCode = 400;
            res.send(data);

        });

    }
}