Note: The total number of spec-files will be expanded over time. As of the posting of this repository, I have the framework's overall shape planned.
# Video Demonstration
[![Playwright Video Demo](https://img.youtube.com/vi/WEHrlFRcDQA/0.jpg)](https://www.youtube.com/watch?v=WEHrlFRcDQA)
# Overview
The methods I'm using here apply some QA and Playwright best-practices (cited in their [online docs](https://playwright.dev/docs/best-practices)). Beyond test-writing etiquette, this also involves structural use of:
- Page Object Model (POM)
- Fixture utilization
  
In short, the POM-files contain object-related information, which is linked to the actual test/spec-files. For example: a link's text is changed from "Sign-in" to "Sign in"; this would cause all spec-files which interact with the link to fail. In a non-POM approach, this would require changes to the text in many places within the test suite. Using POM, this change will only need to be performed within a single file, which trickles down to all of the spec-files which import its information.
Fixtures remove the repetition involved in preparing each test (e.g.: going to a site, inputting login information before every separate test). Using fixtures, these processes are automatically invoked.
As a result of these, the spec-files are easy to maintain, as well as much leaner and easier to understand, at-a-glance.

# <ins>**Important!**</ins>
After cloning the repo, bear in mind that your first full job submit <ins>will fail</ins>. This is due to the fact that I use a check frequently, which performs a visual, screenshot comparison. By design, if Playwright doesn't find a file, it throws an error and deposits a screenshot. If run immediately afterward, this will result in a succesful completion. If, for some reason, you need to flush out these comparisons, simply delete the folders under "./tests/*.spec.ts-snapshots" (not the spec-files themselves).

# Installation & Useful Commands

As a pre-requisite, you will need Playwright and pytest installed. If there any hiccups in the process, see the [documentation](https://playwright.dev/docs/intro#installing-playwright)
```
npm install playwright
```
To invoke the visual testing interface:
```
npx playwright test --ui
```
To see the Allure report, after a full suite run:
```
allure serve allure-results
```
If Allure presents issues, you can attempt a clean command or manually delete the contents of its directory:
```
allure generate --clean --output your-result-folder
```
