import * as webdriver from 'selenium-webdriver';

export interface IBrowserBase {
    readonly driver: webdriver.ThenableWebDriver;
}