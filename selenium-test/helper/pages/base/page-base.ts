import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { BrowserBase } from '../../browsers/base/browser-base';

const options = new chrome.Options();
options.addArguments('disable-infobars');
options.setUserPreferences({ credential_enable_service: false });

export class PageBase {

    protected browser: BrowserBase;
    public driver: webdriver.ThenableWebDriver;

    public constructor(browser: BrowserBase) {
        this.browser = browser;
        this.driver = this.browser.driver;
    }

    public async visit(theUrl: string): Promise<any> {
        return await this.browser.driver.get(theUrl);
    };

    public async quit(): Promise<any> {
        return await this.browser.driver.quit();
    };

    public async findById(id: string): Promise<any> {
        await this.browser.driver.wait(webdriver.until.elementLocated(webdriver.By.id(id)), 15000, 'Looking for element');
        return await this.browser.driver.findElement(webdriver.By.id(id));
    };

    public async findByClass(className: string): Promise<any> {
        await this.browser.driver.wait(webdriver.until.elementLocated(webdriver.By.className(className)), 15000, 'Looking for element');
        return await this.browser.driver.findElement(webdriver.By.className(className));
    };

    public async findByName(name: string): Promise<any> {
        await this.browser.driver.wait(webdriver.until.elementLocated(webdriver.By.name(name)), 15000, 'Looking for element');
        return await this.browser.driver.findElement(webdriver.By.name(name));
    };

    public async write(el: any, txt: string): Promise<any> {
        return await el.sendKeys(txt);
    };

    public async sendKeys(element: any, key: string): Promise<any> {
        return await element.sendKeys(key);
    };

}