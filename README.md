# Playwright Assignments

This repository contains Playwright automation tests for browser-based assignments.

## Project Overview
- Automated UI tests using Playwright
- Cross-browser execution configured for Chromium and Firefox
- Allure reporting integrated for test results

## Prerequisites
- Node.js installed
- npm installed

## Installation
Run the following command in the project root:

```powershell
npm install
```

## Running Tests
Run the full suite:

```powershell
npx playwright test
```

Run only Chromium:

```powershell
npx playwright test --project=chromium
```

```powershell
npx playwright <scriptname>
```

## Allure Report
Generate and view the Allure report:

```powershell
npx allure generate ./allure-results --clean -o ./allure-report
```

If you want to delete the previous reports before generating a new one, run:

```powershell
Remove-Item -Recurse -Force allure-results, allure-report
```

Then run the tests again and generate the report:

```powershell
npx playwright test
npx allure generate ./allure-results --clean -o ./allure-report
```

Then open the generated report with:

```powershell
npx allure open
```

## Jenkins Setup
To run these Playwright tests in Jenkins, configure the job with the following steps:

1. Install the required Jenkins plugins:
   - NodeJS Plugin
   - Git Plugin
   - Allure Jenkins Plugin

2. Create a new pipeline or freestyle job and point it to this repository.

3. Add build steps to install dependencies and run the tests:

```bash
npm install
npx playwright test
npx allure generate ./allure-results --clean -o ./allure-report
```

4. Publish the Allure report as a Jenkins artifact or use the Allure publisher post-build action.

Note: Do not hardcode usernames or passwords in the pipeline, README, or source files. Store sensitive values in Jenkins Credentials and reference them securely at runtime.

Example declarative pipeline:

```groovy
pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        bat 'npx allure generate ./allure-results --clean -o ./allure-report'
      }
    }
  }

  post {
    always {
      allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
    }
  }
}
```

## Notes
- Test configuration is defined in `playwright.config.js`
- Test files are stored under the `tests` directory

## Git
To commit and push your changes:

```powershell
git add .
git commit -m "Add Playwright project files"
git push
```
