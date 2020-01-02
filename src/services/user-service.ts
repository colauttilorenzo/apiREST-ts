import { ServiceBase } from "../base-object/service-base";
import { HttpVerb } from "../base-object/ business-object/_sdk/http-verb";
import { UserModelLogic } from "../model-logic/user-model-logic";

export class UserService extends ServiceBase {

    public constructor() {
        super('user');

        this.service(this.get, HttpVerb.GET, '/get/:username');
        this.service(this.getList, HttpVerb.POST, '/get');
    }

    private getList(req: any, res: any): any {

        new UserModelLogic().findAll().then((data: any) => {

            res.send(data);

        }).catch((data: any) => {

            res.statusCode = 400;
            res.send(data);

        });

    }

    private get(req: any, res: any): any {

        const username: string = req.params.username;

        new UserModelLogic().findAll({
            where: {
                mail: username
            }
        }).then((data: any) => {

            res.send(data);

        }).catch((data: any) => {

            res.statusCode = 400;
            res.send(data);

        });

    }
}