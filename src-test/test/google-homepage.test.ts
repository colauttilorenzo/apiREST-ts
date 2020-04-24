import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { GoogleHomePage } from '../helper/pages/google-homepage';
import { GoogleChromeBrowser } from '../helper/browsers/google-chrome-browser';
import { TestBase } from './base/test-base';

const expect = chai.expect;
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

export class Test {
    public handler: Function;
    public description: string;

    public constructor(description: string, handler: Function) {
        this.description = description;
        this.handler = handler;
    }
}

export class GoogleHomePageTest extends TestBase {

    protected page: GoogleHomePage = new GoogleHomePage(new GoogleChromeBrowser());

    public async example(): Promise<void> {
        const tests: Test[] = [
            new Test('find search input element', async function(page: GoogleHomePage) {
                const result = await page.findInputAndButton();
                expect(result.inputEnabled).to.equal(true);
            }),
            new Test('write into input element and then search', async function(page: GoogleHomePage) {
                const result = await page.submitKeywordAndGetResult();
                expect(result).to.be.above(10);
            })
        ];

        this.complexTest('https://www.google.com', 'Google search automated testing', tests);
    };

}