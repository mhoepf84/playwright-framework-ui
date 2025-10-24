import { test, expect } from "../fixtures/Sliders_fixture";
import { SlidersPage } from '../pages/SlidersPage';

// Read in the environments from .env
require('dotenv').config();

test('Check Sliders Page Contents', async ({ page }) => {
  const sliderspage = new SlidersPage(page)

  // Screenshot comparison before any action is taken
  await expect(page).toHaveScreenshot('05_Sliders-1.png')

  // Check title
  await expect(page).toHaveTitle("Slider | Practice Automation");
});

test('Test Slider', async ({ page }) => {
  const sliderspage = new SlidersPage(page)

  await sliderspage.sliderBar.fill('12');
  await expect(page).toHaveScreenshot('05_Sliders-2.png')
});