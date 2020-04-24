class Database {
    public name?: string;
    public auth: Auth = new Auth();
    public server: Server = new Server();
}

class Auth {
    public username?: string;
    public password?: string;
}

class Server {
    public host?: string;
    public dialect?: string;
}

class Port {
    public http?: string;
    public ws?: string;
}

export class SdkConfig extends Object {
    public database: Database = new Database();
    public moduleApi?: string;
    public baseApi?: string;
    public port: Port;
    public environment?: string;

    public constructor() {
        super();
        this.port = new Port();
    }
}