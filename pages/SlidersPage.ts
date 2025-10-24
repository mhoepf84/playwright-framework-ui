import { Locator, Page } from "@playwright/test";

export class SlidersPage {
    readonly sliderspage: Page;
    readonly sliderBar: Locator;

    constructor(page: Page) {
        this.sliderspage = page;

        // Elements - Page-specific. Listed in order of test spec-file
        this.sliderBar = page.locator('#slideMe')


    }
    }