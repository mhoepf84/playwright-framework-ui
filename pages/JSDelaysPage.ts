import { Locator, Page } from "@playwright/test";

export class JSDelaysPage {
    readonly jsDelayspage: Page;
    readonly jsDelaysStartButton: Locator;
    readonly LiftoffText: Locator;

    constructor(page: Page) {
        this.jsDelayspage = page;

        // Elements - Links on HomePage


        // Elements - Page-specific. Listed in order of test spec-file

        this.jsDelaysStartButton = page.getByRole('button', { name: 'Start' });
        this.LiftoffText = page.getByText('Liftoff!', { exact: true })

    }
    // Elements - Page-specific. Listed in order of test spec-file
    async jsDelaysStartButtonClick() {
        await this.jsDelaysStartButton.click();
    }
    }