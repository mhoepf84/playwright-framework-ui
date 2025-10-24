import { Locator, Page } from "@playwright/test";

export class FormFieldsPage {
    readonly formFieldspage: Page;
        readonly nameinput: Locator;
        readonly password: Locator;
        readonly drink1: Locator;
        readonly drink2: Locator;
        readonly drink3: Locator;
        readonly drink4: Locator;
        readonly drink5: Locator;
        readonly color1: Locator;
        readonly color2: Locator;
        readonly color3: Locator;
        readonly color4: Locator;
        readonly color5: Locator;
        readonly automation: Locator;
        readonly selenium: Locator;
        readonly playwright: Locator;
        readonly cypress: Locator;
        readonly appium: Locator;
        readonly katalon: Locator;
        readonly email: Locator;
        readonly message: Locator;
        readonly submitbutton: Locator;

    constructor(page: Page) {
        this.formFieldspage = page;

        // Elements - Links on HomePage


        // Elements - Page-specific. Listed in order of test spec-file
        this.nameinput = page.getByTestId('name-input')
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.drink1 = page.getByTestId('drink1')
        this.drink2 = page.getByTestId('drink2')
        this.drink3 = page.getByTestId('drink3')
        this.drink4 = page.getByTestId('drink4')
        this.drink5 = page.getByTestId('drink5')
        this.color1 = page.getByTestId('color1')
        this.color2 = page.getByTestId('color2')
        this.color3 = page.getByTestId('color3')
        this.color4 = page.getByTestId('color4')
        this.color5 = page.getByTestId('color5')
        this.automation = page.getByTestId('automation')
        this.selenium = page.getByText('Selenium', { exact: true })
        this.playwright = page.getByText('Playwright', { exact: true })
        this.cypress = page.getByText('Cypress', { exact: true })
        this.appium = page.getByText('Appium', { exact: true })
        this.katalon = page.getByText('Katalon Studio', { exact: true })
        this.email = page.getByTestId('email')
        this.message = page.getByTestId('message')
        this.submitbutton = page.getByTestId('submit-btn')



    }
    // Elements - Page-specific. Listed in order of test spec-file
    // async jsDelaysStartButtonClick() {
    //     await this.jsDelaysStartButton.click();
    // }
    }