import express from 'express';
import { HttpVerb } from './ business-object/_sdk/http-verb';
import { Server, ApiParameter } from '../server/server';

export class ServiceBase {

    private modulePath: string;
    private services: ApiParameter[] = [];

    public static Services: ServiceBase[] = [];

    protected constructor(modulePath: string = '') {
        this.modulePath = modulePath;
        ServiceBase.Services.push(this);
    }

    protected service(handler: express.RequestHandler, httpverb: HttpVerb = HttpVerb.GET, action: string = '') {
        const api: ApiParameter = new ApiParameter(handler, httpverb, action, this.modulePath);

        this.services.push(api);
        Server.register(api);
    }

}