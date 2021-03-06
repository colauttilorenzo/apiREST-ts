import { UserService } from './services/user-service';
const user: UserService = new UserService();

import { LoginService } from './services/login-service';
const login: LoginService = new LoginService();

import { ConfigService } from './services/config-service';
const config: ConfigService = new ConfigService();

import { Server } from './server/server';
import { ConfigModelLogic } from './model-logic/config-model-logic';
Server.start();