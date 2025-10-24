import { test as base } from "@playwright/test";
import { HomePage } from '../pages/Homepage';

export const test = base.extend({
  page: async ({ baseURL, page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goToURL();

    await homePage.tablesLink();

    use(page);
  },
});

export { expect } from "@playwright/test";