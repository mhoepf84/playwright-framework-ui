import { test, expect } from "../fixtures/Tables_fixture";
import { TablesPage } from '../pages/TablesPage';

// Read in the environments from .env
require('dotenv').config();

test('Check Table Page Contents', async ({ page }) => {
  const tablespage = new TablesPage(page)

  // Screenshot comparison before any action is taken
  await expect(page).toHaveScreenshot('08_Tables-1.png')

  // Check title
  await expect(page).toHaveTitle("Tables | Practice Automation");
});

test('Verify Table Size and Entries Per Page', async ({ page }) => {
  const tablespage = new TablesPage(page)

  await expect(tablespage.tablesRow).toHaveCount(41)

  await expect(tablespage.tablesTable).toHaveScreenshot('08_Tables-2.png')
  await tablespage.tablesRowsPerPage.selectOption('25');
  await expect(tablespage.tablesRow).toHaveCount(86)
  await expect(tablespage.tablesTable).toHaveScreenshot('08_Tables-3.png')

});

test('Test Page Changing Buttons', async ({ page }) => {
  const tablespage = new TablesPage(page)
  // Standards state to use Role locators, as CSS Selectors/Xpath aren't as performance-friendly. However, Xpath was the only method here that could isolate the first row for a check.
  // Screenshots could've been used for every step, as well, but those can be fragile and I felt this was a good time to drill deeper, when it comes it verifying text.

  await expect(tablespage.tablesRowCheck).toContainText('1')
  await expect(tablespage.tablesRowCheck).toContainText('India');
  await expect(tablespage.tablesRowCheck).toContainText('1,429');

  await tablespage.tablesNextPage.click()
  await expect(tablespage.tablesRowCheck).toContainText('11')
  await expect(tablespage.tablesRowCheck).toContainText('Ethiopia');
  await expect(tablespage.tablesRowCheck).toContainText('126.5');

  await tablespage.tablesNextPage.click()
  await expect(tablespage.tablesRowCheck).toContainText('21')
  await expect(tablespage.tablesRowCheck).toContainText('United Kingdom');
  await expect(tablespage.tablesRowCheck).toContainText('67.9');

  await tablespage.tablesPrevPage.click()
  await expect(tablespage.tablesRowCheck).toContainText('11')
  await expect(tablespage.tablesRowCheck).toContainText('Ethiopia');
  await expect(tablespage.tablesRowCheck).toContainText('126.5');

  await tablespage.tablesPrevPage.click()
  await expect(tablespage.tablesRowCheck).toContainText('1')
  await expect(tablespage.tablesRowCheck).toContainText('India');
  await expect(tablespage.tablesRowCheck).toContainText('1,429');

});

test('Test Sort Ordering Buttons', async ({ page }) => {
  const tablespage = new TablesPage(page)

  await tablespage.tablesRankSort.click()
  await expect(tablespage.tablesRowCheck).toContainText('1')
  await expect(tablespage.tablesRowCheck).toContainText('India');
  await expect(tablespage.tablesRowCheck).toContainText('1,429');

  await tablespage.tablesRankSort.click()
  await expect(tablespage.tablesRowCheck).toContainText('25')
  await expect(tablespage.tablesRowCheck).toContainText('South Africa');
  await expect(tablespage.tablesRowCheck).toContainText('59.3');

  await tablespage.tablesCountrySort.click()
  await expect(tablespage.tablesRowCheck).toContainText('8')
  await expect(tablespage.tablesRowCheck).toContainText('Bangladesh');
  await expect(tablespage.tablesRowCheck).toContainText('173');

  await tablespage.tablesCountrySort.click()
  await expect(tablespage.tablesRowCheck).toContainText('16')
  await expect(tablespage.tablesRowCheck).toContainText('Vietnam');
  await expect(tablespage.tablesRowCheck).toContainText('99');

  await tablespage.tablesPopSort.click()
  await expect(tablespage.tablesRowCheck).toContainText('25')
  await expect(tablespage.tablesRowCheck).toContainText('South Africa');
  await expect(tablespage.tablesRowCheck).toContainText('59.3');

  await tablespage.tablesPopSort.click()
  await expect(tablespage.tablesRowCheck).toContainText('1')
  await expect(tablespage.tablesRowCheck).toContainText('India');
  await expect(tablespage.tablesRowCheck).toContainText('1,429');

});

test('Test Search Filtering', async ({ page }) => {
  const tablespage = new TablesPage(page)

  // Test filtering
  await tablespage.tablesSearch.click();
  await tablespage.tablesSearch.fill('Tu');
  await expect(tablespage.tablesRowCheck).toContainText('17')
  await expect(tablespage.tablesRowCheck).toContainText('Turkey');
  await expect(tablespage.tablesRowCheck).toContainText('84.3');

  // Check that it can be reverted
  await tablespage.tablesSearch.press('ControlOrMeta+a');
  await tablespage.tablesSearch.fill('');
  await expect(tablespage.tablesRowCheck).toContainText('1')
  await expect(tablespage.tablesRowCheck).toContainText('India');
  await expect(tablespage.tablesRowCheck).toContainText('1,429');

  // Check that no results are shown, if applicable
  await tablespage.tablesSearch.fill('q');
  await expect(tablespage.tablesTable).toContainText('No matching records found');

});
