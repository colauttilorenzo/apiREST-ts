import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { BrowserBase } from "./base/browser-base";

const options = new chrome.Options();
options.addArguments('disable-infobars');
options.setUserPreferences({ credential_enable_service: false });

export class GoogleChromeBrowser extends BrowserBase {

    public readonly driver: webdriver.ThenableWebDriver;

    public constructor() {
        super();

        this.driver = new webdriver.Builder()
            .setChromeOptions(options)
            .forBrowser('chrome')
            .build();

    }

}