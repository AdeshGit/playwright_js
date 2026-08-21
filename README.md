# playwright_js
Automation Testing using Playwright JavaScript

echo "# playwright_js" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:AdeshGit/playwright_js.git
git push -u origin main

git remote add origin git@github.com:AdeshGit/playwright_js.git
git branch -M main
git push -u origin main

## 🏗️ Project Architecture
playwright-automation/
│
├── tests/ # All test specs
│ ├── e2e/ # End-to-end test scenarios
│ │ ├── login.spec.js
│ │ ├── checkout.spec.js
│ │ └── search.spec.js
│ ├── api/ # API test scenarios
│ │ └── users.spec.js
│ └── smoke/ # Smoke/sanity tests
│ └── smoke.spec.js
│
├── pages/ # Page Object Model (POM) classes
│ ├── base.page.js # Common reusable methods
│ ├── login.page.js
│ ├── home.page.js
│ └── checkout.page.js
│
├── fixtures/ # Custom Playwright fixtures
│ └── test-options.js
│
├── utils/ # Helper/utility functions
│ ├── apiHelper.js
│ ├── dataGenerator.js # Faker.js / test data generators
│ └── logger.js
│
├── data/ # Test data files
│ ├── testdata.json
│ └── users.csv
│
├── config/ # Environment configs
│ ├── dev.config.js
│ ├── qa.config.js
│ └── prod.config.js
│
├── reports/ # Generated test reports (ignored in git)
│ ├── html-report/
│ └── screenshots/
│
├── test-results/ # Playwright default output (ignored in git)
│
├── .github/
│ └── workflows/
│ └── playwright.yml # CI/CD pipeline (GitHub Actions)
│
├── playwright.config.js # Main Playwright configuration
├── package.json
├── .env.example # Sample environment variables
├── .gitignore
├── LICENSE
└── README.md
