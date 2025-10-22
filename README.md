Note: The total number of spec-files will be expanded over time. As of the posting of this repository, I have the groundwork/design approach established.
# Video Demonstration
A Youtube video will soon be placed here with some commentary demonstrating the run, as well as reporting tools.
# Overview
The methods I'm using here applies some QA and Playwright best-practices (cited in their [online docs](https://playwright.dev/docs/best-practices)). This includes:
- Page Object Model (POM)
- Fixture utilization
In short, the POM-files contain object-related information, which is linked to the actual spec-files. Say for example that a specific link's text is changed from "Sign-in" to "Sign in"; this would cause all involved spec-files to fail. In a non-POM approach, this would require changes to the text in many places within the test suite. Using POM, this change will only need to be performed within a single file, which trickles down to all of the spec-files which import its information.
Fixtures remove the repetition involved in preparing each test (e.g.: going to a site, inputting login information before every separate test). Using fixtures, these processes are automatically invoked.
As a result of these, the spec-files are easy to maintain, as well as much leaner and easier to understand, at-a-glance.

# Pre-requisites
```
pip install pytest-playwright
npm install --save-dev dotenv
npm install --save-dev @playwright/test allure-playwright
```
To visualize live testing:
```
npx playwright test --ui
```

To see the Allure report:
```
allure serve allure-results
```
