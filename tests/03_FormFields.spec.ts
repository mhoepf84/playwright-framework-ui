import { test, expect } from "../fixtures/FormFields_fixture";
import { FormFieldsPage } from '../pages/FormFieldsPage';

// Read in the environments from .env
require('dotenv').config();

test('Check Form Fields Page Contents', async ({ page }) => {
  const formfieldspage = new FormFieldsPage(page)

  // Screenshot comparison before any action is taken
  await expect(page).toHaveScreenshot('03_FormFields-1.png')

  // Check title
  await expect(page).toHaveTitle("Form Fields | Practice Automation");
});

test('Test Form Fields', async ({ page }) => {
  const formfieldspage = new FormFieldsPage(page)

  // Check button text
  await formfieldspage.nameinput.click();
  await formfieldspage.nameinput.fill('Marshall Test');

  await formfieldspage.password.click();
  await formfieldspage.password.fill('Just a Password');

  await expect(formfieldspage.drink1).not.toBeChecked()
  await expect(formfieldspage.drink2).not.toBeChecked()
  await expect(formfieldspage.drink3).not.toBeChecked()
  await expect(formfieldspage.drink4).not.toBeChecked()
  await expect(formfieldspage.drink5).not.toBeChecked()
  await formfieldspage.drink1.check();
  await expect(formfieldspage.drink1).toBeChecked()
  await formfieldspage.drink2.check();
  await expect(formfieldspage.drink2).toBeChecked()
  await formfieldspage.drink3.check();
  await expect(formfieldspage.drink3).toBeChecked()
  await formfieldspage.drink4.check();
  await expect(formfieldspage.drink4).toBeChecked()
  await formfieldspage.drink5.check();
  await expect(formfieldspage.drink5).toBeChecked()
  await formfieldspage.drink1.uncheck();
  await formfieldspage.drink2.uncheck();
  await formfieldspage.drink3.uncheck();
  await formfieldspage.drink4.uncheck();
  await formfieldspage.drink5.uncheck();
  await expect(formfieldspage.drink1).not.toBeChecked()
  await expect(formfieldspage.drink2).not.toBeChecked()
  await expect(formfieldspage.drink3).not.toBeChecked()
  await expect(formfieldspage.drink4).not.toBeChecked()

  await expect(formfieldspage.color1).not.toBeChecked()
  await expect(formfieldspage.color2).not.toBeChecked()
  await expect(formfieldspage.color3).not.toBeChecked()
  await expect(formfieldspage.color4).not.toBeChecked()
  await expect(formfieldspage.color5).not.toBeChecked()
  await formfieldspage.color1.check();
  await expect(formfieldspage.color1).toBeChecked()
  await formfieldspage.color2.check();
  await expect(formfieldspage.color2).toBeChecked()
  await formfieldspage.color3.check();
  await expect(formfieldspage.color3).toBeChecked()
  await formfieldspage.color4.check();
  await expect(formfieldspage.color4).toBeChecked()
  await formfieldspage.color5.check();
  await expect(formfieldspage.color5).toBeChecked()


  await expect(formfieldspage.automation).toHaveValue('default');
  await formfieldspage.automation.selectOption('yes');
  await expect(formfieldspage.automation).toHaveValue('yes');
  await formfieldspage.automation.selectOption('no');
  await expect(formfieldspage.automation).toHaveValue('no');
  await formfieldspage.automation.selectOption('undecided');
  await expect(formfieldspage.automation).toHaveValue('undecided');
  await formfieldspage.automation.selectOption('default');
  await expect(formfieldspage.automation).toHaveValue('default');

  await expect(formfieldspage.selenium).toHaveText('Selenium');
  await expect(formfieldspage.playwright).toHaveText('Playwright');
  await expect(formfieldspage.cypress).toHaveText('Cypress');
  await expect(formfieldspage.appium).toHaveText('Appium');
  await expect(formfieldspage.katalon).toHaveText('Katalon Studio');

  await formfieldspage.email.click();
  await formfieldspage.email.fill('marshall.hoepfner@gmail.com');
  await formfieldspage.email.press('Tab');

  await formfieldspage.message.fill('A test message!');

  await formfieldspage.submitbutton.click();

});