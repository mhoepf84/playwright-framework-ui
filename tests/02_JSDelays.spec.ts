import { test, expect } from "../fixtures/JSDelays_fixture";
import { JSDelaysPage } from '../pages/JSDelaysPage';

// Read in the environments from .env
require('dotenv').config();

test('Check JS Delays Page Contents', async ({ page }) => {
  const jsdelayspage = new JSDelaysPage(page);

  // Screenshot comparison before any action is taken
  await expect(page).toHaveScreenshot('02_JSDelays-1.png');

  // Check title
  await expect(page).toHaveTitle("JavaScript Delays | Practice Automation");

  // Check button text
  await expect(jsdelayspage.jsDelaysStartButton).toHaveText("Start");
  page.close();

});

test('JavaScript Delay - Smoke Test', async ({ page }) => {
  const jsdelayspage = new JSDelaysPage(page);
  
  // Click Start button, wait for 10s countdown
  await jsdelayspage.jsDelaysStartButton.click();
  await page.waitForTimeout(11000);
  await expect(jsdelayspage.LiftoffText).toHaveText("Liftoff!");

  await expect(page).toHaveScreenshot('02_JSDelays-2.png');
  page.close();
 
});
