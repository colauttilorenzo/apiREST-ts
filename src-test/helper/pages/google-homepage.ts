import * as webdriver from 'selenium-webdriver';
import { PageBase } from './base/page-base';
import { BrowserBase } from '../browsers/base/browser-base';

// ---- fake data ------------------------------------------
const searchInputSelectorClass = 'gLFyf';
const resultConfirmationSelectorId = 'result-stats';

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
            var text = await resultStat.getText();
            if(typeof text === 'string') {
                text = text.match(/([0-9]{0,}\.){1,}[0-9]{0,}/gm);
                if(Array.isArray(text) && text.length > 0) {
                    text = text[0] ? text[0] : '';
                    text = parseInt(text.replace(/\./gm, ''));
                }
            }

            return text;
        }, 5000);
    }

}