import { ServiceBase } from "../base-object/service-base";
import { HttpVerb } from "../base-object/ business-object/_sdk/http-verb";
import { LoginModelLogic } from "../model-logic/login-model-logic";

export class LoginService extends ServiceBase {

    public constructor() {
        super('auth');

        this.service(this.getSession, HttpVerb.POST);
        this.service(this.login, HttpVerb.POST);
        this.service(this.logout, HttpVerb.POST);
    }

    private getSession(req: any, res: any): any {

        let data: any = req.body;

        new LoginModelLogic().findByPk(data.bearer).then((data: any) => {

            res.send(data);

        }).catch((data: any) => {

            res.statusCode = 400;
            res.send(data);

        });

    }

    private login(req: any, res: any) {

        let data: any = req.body;

        new LoginModelLogic().login(data.username, data.password).then((data: any) => {

            res.send(data);

        }).catch((data: any) => {

            res.statusCode = 400;
            res.send(data);

        });

    }

    private logout(req: any, res: any) {

        let data: any = req.body;

        new LoginModelLogic().logout(data.bearer).then((data: any) => {

            res.send(data);

        }).catch((data: any) => {

            res.statusCode = 400;
            res.send(data);

        });

    }

}