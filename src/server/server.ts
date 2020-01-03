import express from 'express';
import bodyParser from 'body-parser';
import { HttpVerb } from '../base-object/ business-object/_sdk/http-verb';
import { Config } from './config';
import { ConfigModelLogic } from '../model-logic/config-model-logic';

import '../base-object/extensions/string-extension';
import { SdkConfig } from '../base-object/ business-object/_sdk/sdk-config';

export class ApiParameter {
    public readonly verb: HttpVerb;
    public readonly action: string;
    public readonly handler: express.RequestHandler

    public readonly strVerb: string;

    private static config: any = Config.get();
    private static getModulePath: Function = (api: string): string => {
        var moduleApi: string = ApiParameter.config['module-api'];
        if (moduleApi == undefined) {
            moduleApi = '';
        }

        return moduleApi.formatUnicorn({ api: api });
    };

    public constructor(handler: express.RequestHandler, verb: HttpVerb = HttpVerb.GET, action: string = '', modulePath: string = '') {
        this.handler = handler;
        this.verb = verb;
        this.strVerb = HttpVerb[this.verb];

        if (modulePath == undefined || modulePath == '') {
            modulePath = ApiParameter.config['base-api'];
        }

        modulePath = ApiParameter.getModulePath(modulePath);

        this.action = '/' + modulePath + ((action == undefined || action == '') ? '/' + handler?.name : action).toLowerCase();
        this.action = this.action.replace(/\/{1,}/gm, '/');
    }
}

export class Server {

    private static app: express.Application = express();
    private static config: SdkConfig = Config.get();

    public static start(): void {

        //set body-parser as default
        Server.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        
            // intercept OPTIONS method
            if ('OPTIONS' == req.method) {
              res.send(200);
            }
            else {
              next();
            }
        });
        Server.app.use(bodyParser.json());
        Server.app.use(bodyParser.urlencoded({ extended: true }));

        //initialising server
        const port: string =  process.env.PORT || Server.config.port || '8080';
        Server.app.listen(Number.parseInt(port), async function () {

            /*const configLogic: ConfigModelLogic = new ConfigModelLogic();
            const config = await configLogic.findAll();

            config.forEach(function (item, index) {
                console.log('[' + item.id + ']', item.dscr);
            });*/

            console.log('server ready on :' + port + '');
            console.log(process.env.NODE_ENV?.toUpperCase());

        });

    }

    public static register(api: ApiParameter) {

        switch (api.verb) {

            case HttpVerb.GET:
                Server.app.get(api.action, api.handler);
                break;

            case HttpVerb.POST:
                Server.app.post(api.action, api.handler);
                break;

            case HttpVerb.PATCH:
                Server.app.patch(api.action, api.handler);
                break;

            case HttpVerb.DELETE:
                Server.app.delete(api.action, api.handler);
                break;

            default:
                break;
        }

        console.log('[ api: ' + api.strVerb.padEnd(4, ' ') + ' ] ' + api.action);
    }

}