import { test, expect } from "../fixtures/fixture";

// Read in the environments from .env
require('dotenv').config();

test('Practice Automation Homepage Check', async ({ page }) => {
  // Check title
  await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");


  
  // Screenshot comparison
  // Playwright's full-screen comparison doesn't preload images which aren't visible, so I'm scrolling to the bottom to force this via Page Down.
  await expect(page).toHaveScreenshot('01_HomePage-1.png');
  await page.keyboard.press('PageDown');
  await expect(page).toHaveScreenshot('01_HomePage-2.png');
  await page.keyboard.press('PageDown');
  await expect(page).toHaveScreenshot('01_HomePage-3.png');
  await page.keyboard.press('PageDown');
  await expect(page).toHaveScreenshot('01_HomePage-4.png');
  await page.keyboard.press('PageDown');
  await expect(page).toHaveScreenshot('01_HomePage-5.png');
});




