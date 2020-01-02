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

export class SdkConfig extends Object {
    public database: Database = new Database();
    public moduleApi?: string;
    public baseApi?: string;
    public port?: string;
    public environment?: string;
}