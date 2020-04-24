import * as webdriver from 'selenium-webdriver';
import { IBrowserBase } from "./i-browser-base";

export abstract class BrowserBase implements IBrowserBase {

    public readonly driver: webdriver.ThenableWebDriver;

}