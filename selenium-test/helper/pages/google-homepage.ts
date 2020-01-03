import * as webdriver from 'selenium-webdriver';
import { PageBase } from './base/page-base';
import { BrowserBase } from '../browsers/base/browser-base';

// ---- fake data ------------------------------------------
const searchInputSelectorClass = 'gLFyf';
const resultConfirmationSelectorId = 'resultStats';

const fakeNameKeyword = 'test';
// ---------------------------------------------------------

let searchInput: any, resultStat: any;

export class GoogleHomePage extends PageBase {

    public constructor(browser: BrowserBase) {
        super(browser);
    }

    public async findInputAndButton() {
        searchInput = await this.findByClass(searchInputSelectorClass);

        const result = await this.browser.driver.wait(async function () {
            const searchInputEnableFlag = await searchInput.isEnabled();

            return {
                inputEnabled: searchInputEnableFlag
            }
        }, 5000);
        return result;
    }

    public async submitKeywordAndGetResult() {
        await this.findInputAndButton();
        await this.write(searchInput, fakeNameKeyword);
        await this.sendKeys(searchInput, webdriver.Key.ENTER);
        resultStat = await this.findById(resultConfirmationSelectorId);
        return await this.browser.driver.wait(async function () {
            return await resultStat.getText();
        }, 5000);
    }

}