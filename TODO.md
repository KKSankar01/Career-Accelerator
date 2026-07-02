# To-Do List - Learning Goals

## 1. Learn Microsoft Azure

### What to Learn:
- [ ] Azure fundamentals and core concepts
  - Cloud computing basics
  - Azure services overview (IaaS, PaaS, SaaS)
  - Azure regions and availability zones
  - Azure resource management

- [ ] Azure Account & Subscriptions
  - Create and manage Azure account
  - Understand subscription types
  - Billing and cost management
  - Azure free tier exploration

- [ ] Core Azure Services
  - **Compute**: Virtual Machines (VMs), App Service, Container Instances, Azure Functions
  - **Storage**: Blob Storage, Table Storage, Queue Storage, File Shares
  - **Networking**: Virtual Networks, Load Balancer, Application Gateway, VPN
  - **Databases**: SQL Database, Cosmos DB, Azure Database for MySQL/PostgreSQL
  - **AI/ML**: Azure Machine Learning, Cognitive Services

- [ ] Azure DevOps & CI/CD
  - Azure Pipelines for continuous integration and deployment
  - Azure Repos for version control
  - Azure Artifacts for package management
  - Build and release pipelines

- [ ] Azure Portal & CLI
  - Navigate Azure Portal dashboard
  - Azure CLI commands and scripts
  - Azure PowerShell module
  - Resource management templates (ARM templates)

- [ ] Security & Compliance
  - Azure Active Directory (Azure AD)
  - Role-Based Access Control (RBAC)
  - Network security groups
  - Encryption and key management
  - Compliance standards (GDPR, HIPAA, etc.)

- [ ] Monitoring & Troubleshooting
  - Azure Monitor
  - Application Insights
  - Log Analytics
  - Alerts and notifications

### Learning Resources:
- [ ] Microsoft Learn (free) - https://learn.microsoft.com/en-us/
- [ ] Azure documentation official site
- [ ] Azure free tier trial (200 USD credits for 30 days)
- [ ] YouTube Azure tutorials
- [ ] Pluralsight/Udemy Azure courses
- [ ] Azure certification paths (AZ-900, AZ-104, etc.)

### Hands-On Practice:
- [ ] Create first Azure VM
- [ ] Deploy a web app to App Service
- [ ] Create and manage storage accounts
- [ ] Set up a simple CI/CD pipeline
- [ ] Create a virtual network and configure security
- [ ] Deploy a database and query it

### Milestones:
- [ ] **Milestone 1**: Complete Azure Fundamentals (AZ-900 prep)
- [ ] **Milestone 2**: Deploy first application to Azure
- [ ] **Milestone 3**: Set up CI/CD pipeline
- [ ] **Milestone 4**: Implement security best practices

---

## 2. Learn MCP Servers (Model Context Protocol)

### What to Learn:
- [ ] MCP Fundamentals
  - What is Model Context Protocol
  - Why MCP servers are used
  - How MCP differs from other protocols
  - MCP architecture and components

- [ ] MCP Server Basics
  - MCP server lifecycle (initialization, request handling, shutdown)
  - Supported transport types (stdio, HTTP, SSE)
  - Building blocks of an MCP server
  - Request-response patterns

- [ ] MCP Configuration
  - mcp.json structure and schema
  - Server configuration options
  - Environment variables setup
  - Debugging MCP server connections

- [ ] Tools & Resources Exposed by MCP Servers
  - Tool definitions and parameters
  - Resource definitions and URIs
  - Prompts and prompt templates
  - Error handling and exceptions

- [ ] Implementing MCP Servers
  - Creating a simple MCP server from scratch
  - Defining tools that servers expose
  - Handling tool calls and requests
  - Testing MCP server implementations

- [ ] Playwright MCP Server (Currently Using)
  - Understanding @playwright/mcp@0.0.77 features
  - Available tools and capabilities
  - Browser automation through MCP
  - Integration with VS Code

- [ ] VS Code Integration
  - Configuring MCP servers in VS Code
  - Working with Copilot and MCP servers
  - Debugging MCP servers in VS Code
  - Troubleshooting connection issues

- [ ] Advanced Topics
  - Multiple MCP servers configuration
  - Server-to-server communication
  - Custom MCP server development
  - Performance optimization
  - Security considerations for MCP servers

### Learning Resources:
- [ ] MCP Official Documentation - https://modelcontextprotocol.io/
- [ ] MCP GitHub Repository - https://github.com/anthropics/mcp
- [ ] Playwright MCP Documentation
- [ ] VS Code MCP Integration guide
- [ ] Example MCP server implementations
- [ ] Community forums and discussions

### Hands-On Practice:
- [ ] Set up and configure current Playwright MCP server correctly
- [ ] Explore available Playwright tools via MCP
- [ ] Create a simple custom MCP server
- [ ] Integrate custom MCP server with VS Code
- [ ] Debug MCP server connections
- [ ] Build a tool-based MCP server (e.g., file operations tool)

### Milestones:
- [ ] **Milestone 1**: Successfully configure and run Playwright MCP server
- [ ] **Milestone 2**: Understand MCP protocol and architecture
- [ ] **Milestone 3**: Create custom MCP server with basic tools
- [ ] **Milestone 4**: Integrate multiple MCP servers in VS Code

---

## Project Integration Tasks

- [ ] Apply Azure knowledge to deploy current Playwright test project to Azure
- [ ] Use MCP servers for test automation in Assignment-4
- [ ] Configure MCP server for better Copilot integration in tests
- [ ] Document MCP server setup for team reference

---

## Learning Timeline Suggestion

### Week 1:
- Azure Fundamentals (AZ-900 basics)
- MCP Protocol overview and basics

### Week 2:
- Azure DevOps and CI/CD
- MCP Server configuration and troubleshooting

### Week 3:
- Deploy application to Azure
- Create custom MCP server

### Week 4:
- Azure monitoring and security
- Advanced MCP implementation

---

---

## 3. Azure for Testers - Practical Guide

### Testing Infrastructure on Azure

#### Test Environment Setup
- [ ] Create separate Azure resource groups for Dev, Staging, and Production testing
- [ ] Set up Azure Virtual Machines for test execution
  - Windows VMs for Selenium/Cypress/Playwright tests
  - Linux VMs for headless browser testing
- [ ] Configure Azure Container Instances for containerized tests
- [ ] Set up Azure App Service for hosting test applications

#### Test Data Management
- [ ] Use Azure SQL Database for managing test data
- [ ] Implement Azure Table Storage for test result logging
- [ ] Use Azure Blob Storage for test artifacts (screenshots, videos, logs)
- [ ] Set up Azure Data Factory for ETL of test data

#### CI/CD Pipeline for Test Automation
- [ ] Configure Azure Pipelines for automated test execution
  - Trigger tests on code commits
  - Parallel test execution across multiple agents
  - Scheduled test runs (nightly, weekly)
- [ ] Use Azure DevOps for test case management (Azure Test Plans)
- [ ] Integrate test results with Azure Boards for tracking
- [ ] Set up notifications for test failures

#### Performance & Load Testing
- [ ] Azure Load Testing service for stress/load testing
- [ ] Azure Application Insights for performance monitoring
- [ ] Set up real-time dashboards for test metrics
- [ ] Monitor application behavior under load

#### Test Reporting & Analytics
- [ ] Use Azure Monitor for collecting test logs
- [ ] Application Insights for end-to-end application tracing
- [ ] Log Analytics workspace for analyzing test data
- [ ] Create Power BI dashboards for test metrics visualization
- [ ] Set up alerts for test failures and performance degradation

#### Security Testing on Azure
- [ ] Use Azure Defender for vulnerability scanning
- [ ] Configure Network Security Groups for test environment isolation
- [ ] Test API security using Azure API Management
- [ ] Perform penetration testing (with approval) on test environment

### Tester's Azure Checklist

- [ ] **Step 1**: Create Azure DevOps organization
- [ ] **Step 2**: Set up Azure Pipelines for test automation
- [ ] **Step 3**: Configure test agents (self-hosted or Microsoft-hosted)
- [ ] **Step 4**: Create test project structure with Azure Repos
- [ ] **Step 5**: Set up test data in Azure SQL Database
- [ ] **Step 6**: Implement logging to Azure Blob Storage
- [ ] **Step 7**: Create dashboards in Azure Monitor
- [ ] **Step 8**: Set up alerts for critical test failures
- [ ] **Step 9**: Configure scheduled test runs
- [ ] **Step 10**: Document test environment setup

### Azure Services Most Used by Testers

| Azure Service | Testing Use Case | How to Use |
|---------------|-----------------|-----------|
| **Azure Pipelines** | CI/CD automation for tests | Define YAML pipelines for test execution |
| **Azure Test Plans** | Test case management | Create, organize, and track test cases |
| **Azure DevOps Repos** | Version control for test code | Store and manage test scripts |
| **Azure VMs** | Test environment hosting | Run applications and tests on dedicated VMs |
| **Azure SQL Database** | Test data storage | Store and manage test data securely |
| **Azure Blob Storage** | Test artifacts storage | Store screenshots, videos, logs |
| **Application Insights** | Performance monitoring | Monitor app behavior during tests |
| **Azure Monitor** | Test result logging | Collect and analyze test execution logs |
| **Azure Container Instances** | Containerized test execution | Run tests in isolated containers |
| **Power BI** | Test metrics visualization | Create dashboards showing test trends |

---

## 4. MCP Tools Commonly Used by Testers

### Essential MCP Tools Overview

#### Browser Automation Tools (via Playwright MCP)
- [ ] **Page Navigation Tool**
  - Navigate to URLs
  - Use case: Opening test pages and navigating through application flows

- [ ] **Element Locating Tools**
  - Find elements by selector, text, role
  - Use case: Identifying UI elements for interaction

- [ ] **Interaction Tools**
  - Click, type, select, hover
  - Use case: Simulating user interactions

- [ ] **Assertion Tools**
  - Check element visibility, text content, attributes
  - Use case: Validating expected behavior

- [ ] **Screenshot & Visual Testing**
  - Capture screenshots, compare visuals
  - Use case: Visual regression testing

- [ ] **Network Interception**
  - Capture network requests/responses
  - Use case: API testing, performance monitoring

- [ ] **Wait & Sync Tools**
  - Wait for elements, conditions
  - Use case: Handling dynamic content and async operations

### Playwright MCP Tools Configuration for Testers

```json
// Example mcp.json for testing
{
  "servers": {
    "playwright-mcp": {
      "type": "stdio",
      "sandboxEnabled": false,
      "command": "npx",
      "cwd": "${workspaceFolder}",
      "args": [
        "@playwright/mcp@0.0.77"
      ],
      "env": {
        "DEBUG": "pw:api"  // Enable debugging
      }
    }
  }
}
```

### Common MCP Tools Used in Test Scenarios

#### Scenario 1: Login Testing
- [ ] **Navigation Tool**: Go to login page
- [ ] **Element Location Tool**: Find email and password inputs
- [ ] **Type Tool**: Enter credentials
- [ ] **Click Tool**: Click login button
- [ ] **Wait Tool**: Wait for success/error message
- [ ] **Assertion Tool**: Verify successful login or error message

#### Scenario 2: Form Validation Testing
- [ ] **Interaction Tools**: Fill form fields
- [ ] **Assertion Tools**: Check field validation messages
- [ ] **Click Tool**: Submit form
- [ ] **Wait Tool**: Wait for response
- [ ] **Assertion Tool**: Verify form submission result

#### Scenario 3: Navigation Flow Testing
- [ ] **Navigation Tool**: Visit different pages
- [ ] **Screenshot Tool**: Capture page states
- [ ] **Element Locating Tool**: Find navigation elements
- [ ] **Click Tool**: Navigate through flow
- [ ] **Assertion Tool**: Verify correct page loads

#### Scenario 4: API Response Validation
- [ ] **Network Interception Tool**: Capture API calls
- [ ] **Response Inspection Tool**: Extract response data
- [ ] **Assertion Tool**: Validate response data matches expectations

#### Scenario 5: Visual Regression Testing
- [ ] **Screenshot Tool**: Capture current state
- [ ] **Comparison Tool**: Compare with baseline screenshot
- [ ] **Report Tool**: Document visual differences

### MCP Tools Best Practices for Testers

✓ **Use Explicit Waits**: Use wait tools instead of sleep
✓ **Meaningful Assertions**: Use clear, specific assertion messages
✓ **Proper Selectors**: Use stable, maintainable selectors (role-based preferred)
✓ **Error Handling**: Capture and log errors with context
✓ **Screenshot on Failure**: Automatically capture screenshots on assertion failures
✓ **Request Logging**: Log network requests for debugging
✓ **Test Data Management**: Use environment variables for sensitive data

### MCP Server Setup for Test Automation

#### Step-by-Step Setup:

1. **Initialize MCP in Project**
   ```bash
   npm install @playwright/mcp
   ```

2. **Create mcp.json Configuration**
   - Define server configuration
   - Set environment variables
   - Configure transport type (stdio recommended for CI/CD)

3. **Configure VS Code**
   - Add mcp.json to .vscode folder
   - Restart VS Code to load MCP server

4. **Integrate with Tests**
   - Use MCP tools in test scripts
   - Configure helpers for common operations
   - Set up logging and reporting

5. **CI/CD Integration**
   - Configure Azure Pipelines to use MCP
   - Set up test execution agents
   - Configure result reporting

### Troubleshooting MCP Issues

| Issue | Solution |
|-------|----------|
| MCP Server won't start | Check mcp.json syntax, remove invalid arguments, verify npm package |
| Connection timeout | Increase timeout values, check network connectivity, verify agent setup |
| Tool not found | Ensure MCP package version is compatible, check tool names |
| Slow test execution | Use parallel execution, optimize wait times, check network latency |
| Flaky tests | Add explicit waits, use better selectors, handle dynamic content |

### Recommended MCP Tools Stack for Testing

```
📦 Core Testing Tools
├── Browser Automation: Playwright MCP
├── Data Management: Azure Database Tools MCP (if available)
├── Reporting: Allure MCP or custom reporting
└── CI/CD Integration: Azure Pipelines MCP

📊 Monitoring & Debugging
├── Network: Playwright Network Interception
├── Performance: Application Insights integration
├── Logging: Azure Monitor integration
└── Screenshots: Playwright Screenshot tool
```

### Learning Resources for MCP Tools

- [ ] Playwright MCP Documentation
- [ ] MCP GitHub Examples: https://github.com/anthropics/mcp
- [ ] Playwright API Documentation: https://playwright.dev/
- [ ] Azure DevOps Testing Guide
- [ ] Community forums and Stack Overflow

---

## 5. Using Playwright Agents - Complete Guide

### Overview of Playwright Agents

Playwright agents are specialized AI assistants that help you with test automation tasks:

1. **Playwright Test Planner** - Creates comprehensive test plans
2. **Playwright Test Generator** - Generates automated test code
3. **Playwright Test Healer** - Debugs and fixes failing tests

### Agent 1: Playwright Test Planner

#### Purpose:
- Creates comprehensive test plans for web applications
- Identifies test scenarios and coverage areas
- Organizes tests into logical suites
- Documents test steps and expected outcomes

#### When to Use:
- [ ] Starting a new testing project
- [ ] Planning tests for a complex web application
- [ ] Documenting testing strategy for team alignment
- [ ] Creating test requirements documentation

#### How to Use:

1. **Provide Application Details**
   - Share application URL or description
   - Describe key features and user flows
   - List critical business processes

2. **Request Test Plan**
   - Ask: "Create a comprehensive test plan for [application name]"
   - Specify areas of focus (e.g., login, booking, payments)
   - Mention performance or compliance requirements

3. **Use Generated Plan**
   - Review test scenarios
   - Customize test cases for your needs
   - Use as blueprint for test generation

#### Example Usage:
```
Agent Input: "Create a comprehensive test plan for an event booking application with login, search, booking, and payment features."

Agent Output:
- Test Suite: Authentication & Login
- Test Suite: Event Search & Filtering
- Test Suite: Booking Management
- Test Suite: Payment Processing
- Test Suite: User Profile Management
[Each with detailed test cases and steps]
```

#### Best Practices:
- [ ] Be specific about application features
- [ ] Mention priority of different areas
- [ ] Include edge cases and error scenarios
- [ ] Request accessibility and compatibility requirements

---

### Agent 2: Playwright Test Generator

#### Purpose:
- Generates ready-to-use Playwright test code
- Creates tests from test plans
- Generates tests with proper selectors and assertions
- Produces maintainable test scripts

#### When to Use:
- [ ] Creating new test files from test plans
- [ ] Generating tests for specific scenarios
- [ ] Adding tests to existing test suites
- [ ] Creating tests for new features

#### How to Use:

1. **Prepare Test Plan Information**
   - Have test plan file ready (from Test Planner)
   - Know test suite name
   - Identify test case you want to generate
   - Note the seed file path

2. **Request Test Generation**
   - Ask: "Generate a Playwright test for [test case name]"
   - Provide test file path where to save
   - Reference the test plan document
   - Specify any custom helpers or utilities

3. **Customize Generated Tests**
   - Review generated code
   - Adjust selectors if needed
   - Add additional assertions
   - Integrate with your test framework

#### Example Usage:
```
Agent Input:
Test Suite: Authentication & Login
Test Name: User successfully logs in with valid credentials
Test File: tests/auth/login.spec.js
Seed File: tests/seed.spec.js

Agent Output:
```javascript
test('User successfully logs in with valid credentials', async ({ page }) => {
  await page.goto('https://app.example.com/login');
  await page.fill('input[name="email"]', 'user@test.com');
  await page.fill('input[name="password"]', 'securePassword123');
  await page.click('button:has-text("Sign In")');
  await expect(page.locator('#user-dashboard')).toBeVisible();
  await expect(page.locator('text=Welcome')).toContainText('user@test.com');
});
```
```

#### Generated Test Structure:
- [ ] Proper imports and setup
- [ ] Clear test names and descriptions
- [ ] Role-based selectors (preferred over class/id)
- [ ] Explicit waits for dynamic content
- [ ] Meaningful assertions
- [ ] Error handling where appropriate

#### Tips:
- [ ] Generate tests one at a time for better quality
- [ ] Review generated code before committing
- [ ] Ask agent to regenerate if selectors don't match your app
- [ ] Use `@tag` annotations for test categorization

---

### Agent 3: Playwright Test Healer

#### Purpose:
- Fixes broken or failing Playwright tests
- Debugs test execution issues
- Updates selectors when UI changes
- Improves test reliability

#### When to Use:
- [ ] Tests fail unexpectedly after UI changes
- [ ] Selectors are no longer finding elements
- [ ] Tests timeout or hang
- [ ] Assertions fail intermittently (flaky tests)
- [ ] Need to update deprecated test syntax

#### How to Use:

1. **Provide Failure Information**
   - Share the failing test code
   - Provide error message/stack trace
   - Describe what changed (UI update, feature change, etc.)
   - Share screenshot of actual vs expected

2. **Request Test Fix**
   - Ask: "Fix this failing test: [test code]"
   - Provide error details
   - Share current page structure if available
   - Mention recent changes to application

3. **Apply Suggested Fixes**
   - Review proposed changes
   - Test locally before committing
   - Update selectors as recommended
   - Add better wait conditions if needed

#### Example Usage:
```
Agent Input:
Failing Test: Login test for user with valid credentials
Error: Timeout of 30000ms exceeded. Waiting for selector '#user-dashboard'
Last Change: UI redesign moved dashboard elements to different structure

Failure Details:
- Selector '#user-dashboard' not found
- Element might have new class/id
- Need to find new selector path

Agent Output:
Recommendations:
1. Replace selector '#user-dashboard' with '[data-testid="dashboard"]'
2. Add wait for network idle: await page.waitForLoadState('networkidle');
3. Increase timeout to 40000ms for slower network
4. Use role-based selector: page.getByRole('main')
```
```

#### Common Fixes Applied:
- [ ] Update CSS selectors to role-based selectors
- [ ] Add explicit waits for dynamic content
- [ ] Fix timing issues and race conditions
- [ ] Update deprecated Playwright APIs
- [ ] Improve error messages and logging
- [ ] Fix test data or environment issues

#### Healing Workflow:
1. Copy test code and error message
2. Ask Test Healer for diagnosis
3. Review suggested fixes
4. Apply changes and run locally
5. Verify test passes
6. Commit updated test

---

### Workflow: Using All Three Agents Together

#### Complete Testing Workflow:

```
Step 1: Start with Test Planner
  ↓
Request comprehensive test plan for your application
Review and customize test scenarios
Export/save test plan document
  ↓

Step 2: Generate Tests with Test Generator
  ↓
For each test case from the plan:
  - Request test code generation
  - Customize generated tests
  - Add to test suite
  - Run tests locally
  ↓

Step 3: Maintain Tests with Test Healer
  ↓
When tests fail:
  - Identify failing test
  - Provide error details to Test Healer
  - Apply recommended fixes
  - Update test code
  - Re-run tests
```

#### Example Project Workflow:

- [ ] **Week 1**: Use Planner to create test plan for Assignment-4
- [ ] **Week 2**: Use Generator to create automated tests from plan
- [ ] **Week 3**: Run tests and use Healer to fix any failures
- [ ] **Week 4**: Maintain and enhance test suite

---

### Practical Tips for Using Agents

#### For Test Planner:
- [ ] Provide clear app description and user flows
- [ ] Ask for specific coverage areas
- [ ] Request edge cases and error scenarios
- [ ] Ask for accessibility testing requirements
- [ ] Request performance testing considerations

#### For Test Generator:
- [ ] Use specific test case descriptions
- [ ] Provide clear selector guidance if needed
- [ ] Ask for helper function generation
- [ ] Request test data setup
- [ ] Ask for cleanup and teardown

#### For Test Healer:
- [ ] Always provide complete error stack trace
- [ ] Share current selector attempts and failures
- [ ] Describe recent application changes
- [ ] Ask for alternative selector strategies
- [ ] Request explanations for recommended fixes

#### Iterative Improvement:
- [ ] Start with basic tests
- [ ] Use Healer to fix issues
- [ ] Use Generator to add new tests
- [ ] Refactor common patterns
- [ ] Document learned lessons

---

### Agent Limitations & Workarounds

| Limitation | Workaround |
|-----------|-----------|
| Agent doesn't know app specifics | Provide detailed app description and context |
| Generated selectors don't match UI | Use Test Healer to update selectors |
| Tests are too generic | Add more specific assertions and expectations |
| Agent generates old syntax | Specify Playwright version and request updated syntax |
| Complex workflows not generated | Break into smaller test cases |

---

### Integration with Your Project

#### Assignment-4 Workflow:
```
1. Use Test Planner
   → Create plan for event booking application
   → Plan tests for: login, search, booking, my bookings, detail pages

2. Use Test Generator
   → Generate tests for each scenario
   → Save to tests/Assignment-4/ directory
   → Review and adjust selectors

3. Use Test Healer
   → Fix any selector issues
   → Update tests after UI changes
   → Handle timing/flakiness issues

4. Run in CI/CD
   → Execute via Azure Pipelines
   → Report results using Allure
   → Track metrics over time
```

#### Command Line Usage:
```bash
# Initialize agents in your project
npx playwright init-agents

# Run tests generated by agents
npx playwright test tests/Assignment-4/

# Debug failing tests with agent assistance
npx playwright test --debug tests/Assignment-4/assignment-4.spec.js
```

---

### Resources & Learning

- [ ] Playwright Agents Documentation
- [ ] Test Planner Best Practices
- [ ] Test Generator Code Examples
- [ ] Test Healer Troubleshooting Guide
- [ ] Community Examples on GitHub
- [ ] Video tutorials on Playwright testing

### Quick Reference Checklist

**Using Test Planner:**
- [ ] Describe application features clearly
- [ ] Include business requirements
- [ ] Request comprehensive coverage
- [ ] Save generated plan for reference

**Using Test Generator:**
- [ ] Have test plan ready
- [ ] Know target test file location
- [ ] Review generated code
- [ ] Adjust as needed for your app

**Using Test Healer:**
- [ ] Identify failing test
- [ ] Gather error details
- [ ] Request specific fix
- [ ] Apply and validate fix

---

## Notes:
- Start with free resources (Microsoft Learn)
- Hands-on practice is essential for both topics
- Document learnings in dedicated wiki/notes
- Consider Azure and MCP certification after learning fundamentals
- Focus on practical application in your test automation projects
- Keep MCP configurations version-controlled in your repository

