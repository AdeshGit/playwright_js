# playwright_js
Automation Testing using Playwright JavaScript

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

# 1. Check current status/branch
git status
git branch

# 2. (Optional) Update local main before branching
git pull origin main

# 3. Create and switch to new branch
git checkout -b your-branch-name

# 4. Verify you're on the new branch
git branch

# 5. Stage your changes
git add .

# 6. Commit your changes
git commit -m "your commit message"

# 7. Push new branch to remote (first time uses -u)
git push -u origin your-branch-name

# For all future pushes on this branch, just use:
git push