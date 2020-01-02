import { UUIDV4, UUID, DOUBLE } from "sequelize";
import moment from 'moment'
import { RepositoryBase } from "../base-object/repository-base";
import { Login } from "../base-object/ business-object/login";
import { User } from "../base-object/ business-object/user";
import { UserModelLogic } from "./user-model-logic";

const DATE_FORMAT: string = 'YYYY-MM-DDTHH:mm:ss';

export class LoginModelLogic extends RepositoryBase {

    private userLogic: UserModelLogic = new UserModelLogic();

    public constructor() {
        super();

        Login.init(
            {
                id: {
                    type: UUID,
                    defaultValue: UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                userId: {
                    type: UUID,
                    field: 'user_id',
                    allowNull: false
                },
                expires: {
                    type: DOUBLE,
                    field: 'expires',
                    allowNull: false
                }
            },
            {
                sequelize: this.connection,
                underscored: true,
                timestamps: false,
                tableName: 'login'
            }
        );

        Login.hasOne(User, {
            sourceKey: 'userId',
            foreignKey: 'id',
            as: 'user'
        });

    }

    private async findAll(): Promise<Login[]> {
        let data = await Login.findAll();
        return data;
    }

    public async findByPk(id: string): Promise<Login | undefined> {
        let data: Login | undefined = await Login.findByPk(id, { rejectOnEmpty: true, include: [Login.associations.user] });
        let result: Login | undefined = undefined;
        if (data.expires != undefined) {
            let _expires: number = data.expires;
            let _now: number = moment().valueOf();
            if (_expires >= _now) {
                result = data;
            }
        }

        return result;
    }

    public async login(username: string, password: string): Promise<Login|undefined> {
        let data = await this.userLogic.findByUsernameAndPassword(username, password);
        let result: Login|undefined = undefined;

        if(data != undefined) {
            let _login = new Login();
            _login.userId = data.id;
            _login.expires = moment().add(30, 'days').valueOf();

            result = await _login.save();
        }

        return result;
    }

    public async logout(id: string): Promise<Login | undefined> {
        let data = await this.findByPk(id);
        if (data != undefined) {
            let expires: number = moment().valueOf();
            data = await data.update({ expires: expires });
        }

        return data;
    }
}