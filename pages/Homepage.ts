import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly jsDelays: Locator;
    readonly formFields : Locator;
    readonly popups : Locator;
    readonly sliders : Locator;
    readonly calendars : Locator;
    readonly modals : Locator;
    readonly tables : Locator;
    readonly windowOperations : Locator;
    readonly hover : Locator;
    readonly ads : Locator;
    readonly gestures : Locator;
    readonly fileDownload : Locator;
    readonly clickEvents : Locator;
    readonly spinners : Locator;
    readonly fileUpload : Locator;
    readonly iframes : Locator;
    readonly brokenImages : Locator;
    readonly brokenLinks : Locator;
    readonly accordions : Locator;

    // readonly jsDelaysStartButton: Locator;



    constructor(page: Page) {
        this.page = page;

        // Elements - Links on HomePage
        this.jsDelays = page.getByRole('link', { name: 'JavaScript Delays' });
        this.formFields = page.getByRole('link', { name: 'Form Fields' });
        this.popups = page.getByRole('link', { name: 'Popups' });
        this.sliders = page.getByRole('link', { name: 'Sliders' });
        this.calendars = page.getByRole('link', { name: 'Calendars' });
        this.modals = page.getByRole('link', { name: 'Modals' });
        this.tables = page.getByRole('link', { name: 'Tables' });
        this.windowOperations = page.getByRole('link', { name: 'Window Operations' });
        this.hover = page.getByRole('link', { name: 'Hover' });
        this.ads = page.getByRole('link', { name: 'Ads' });
        this.gestures = page.getByRole('link', { name: 'Gestures' });
        this.fileDownload = page.getByRole('link', { name: 'File Download' });
        this.clickEvents = page.getByRole('link', { name: 'Click Events' });
        this.spinners = page.getByRole('link', { name: 'Spinners' });
        this.fileUpload = page.getByRole('link', { name: 'File Upload' });
        this.iframes = page.getByRole('link', { name: 'Iframes' });
        this.brokenImages = page.getByRole('link', { name: 'Broken Images' });
        this.brokenLinks = page.getByRole('link', { name: 'Broken Links' });
        this.accordions = page.getByRole('link', { name: 'Accordions' });
    }

    // Methods - Initial URL
    async goToURL() {
        await this.page.goto(`${process.env.HOME_URL}`);
        }

    // Links on Homepage
    async jsDelaysLink() {
        await this.jsDelays.click();
    }
    async formFieldsLink() {
        await this.formFields.click();
    }
    async popupsLink() {
        await this.popups.click();
    }
    async slidersLink() {
        await this.sliders.click();
    }
    async calendarsLink() {
        await this.calendars.click();
    }
    async modalsLink() {
        await this.modals.click();
    }
    async tablesLink() {
        await this.tables.click();
    }
    async windowOperationsLink() {
        await this.windowOperations.click();
    }
    async hoverLink() {
        await this.hover.click();
    }
    async adsLink() {
        await this.ads.click();
    }
    async gesturesLink() {
        await this.gestures.click();
    }
    async fileDownloadLink() {
        await this.fileDownload.click();
    }
    async clickEventsLink() {
        await this.clickEvents.click();
    }
    async spinnersLink() {
        await this.spinners.click();
    }
    async fileUploadLink() {
        await this.fileUpload.click();
    }
    async iframesLink() {
        await this.iframes.click();
    }
    async brokenImagesLink() {
        await this.brokenImages.click();
    }
    async brokenLinksLink() {
        await this.brokenLinks.click();
    }
    async accordionsLink() {
        await this.accordions.click();
    }
    }