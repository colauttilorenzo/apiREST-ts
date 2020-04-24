import { describe, it, before, after } from 'mocha';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { PageBase } from '../../helper/pages/base/page-base';

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

export class TestBase {

    protected page: PageBase;

    public async test(url: string, testDescription: string, test: Test, timeout: number | string = 50000): Promise<void> {

        try {

            const page = this.page;

            describe(testDescription, async function () {
                this.timeout(timeout);

                before(async () => {
                    await page.visit(url);
                });

                after(async () => {
                    await page.quit();
                });

                it(test.description, async () => test.handler(page));
            });

        } catch (ex) {

            console.log(new Error(ex.message));

        } finally {

        }

    }


    public async complexTest(url: string, testDescription: string, tests: Test[], timeout: number | string = 50000): Promise<void> {

        try {

            const page = this.page;

            describe(testDescription, async function () {
                this.timeout(timeout);

                before(async () => {
                    await page.visit(url);
                });

                after(async () => {
                    await page.quit();
                });

                for (let i = 0; i < tests.length; i++) {
                    it(tests[i].description, async () => tests[i].handler(page));
                }
            });

        } catch (ex) {

            console.log(new Error(ex.message));

        } finally {

        }

    }

}