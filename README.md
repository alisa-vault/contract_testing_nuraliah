# Contract Testing for Inventory Management System

## Overview
This project is a RESTful API for managing a simple inventory system with contract testing implementation. The system provides a UI to visualize the inventory and endpoints for managing items. Contract testing for API endpoints is implemented using Cypress and Mocha for testing.

## Features
- **RESTful API** to manage inventory items (CRUD operations)
- **Frontend UI** to display and interact with the inventory
- **Express.js server** to serve static files and API responses
- **GitHub integration** for version control
- **Uses contract testing** to ensure API stability
- **Cypress** for end-to-end testing
- **Mocha** integration
- **pm2** for server startup

## Folder Structure
```
project-root/
│── public/               
│   ├── index.html        
│   ├── app.js            
│   ├── styles.css       
│── routes/              
│   ├── items.js         
│── server.js           
│── cypress/             
│   ├── e2e        
│   ├── support            
│   ├── cypress.config.js
│   ├── package.json
│   ├── cypress-results.json
│── .gitignore            
│── package.json         
│── README.md           
```

## Setup & Installation
### Prerequisites
- Install [Node.js](https://nodejs.org/) and Git

### Installation Steps
```sh
git clone https://github.com/alisa-vault/contract_testing_nuraliah.git
cd contract_testing_nuraliah
npm install
```

### Running the Server
```sh
node server.js
or
pm2 start server.js
```
The server will be available at: **http://localhost:3000**

## API Endpoints
| Method | Endpoint      | Description |
|--------|--------------|-------------|
| GET    | `/items`     | Fetch all inventory items |
| GET    | `/items/:id` | Fetch a single item by ID |
| POST   | `/items`     | Add a new item |
| PUT    | `/items/:id` | Update an item by ID |
| DELETE | `/items/:id` | Remove an item by ID |

## Contract Testing
- Cypress is used for end-to-end contract testing of API endpoints.
- Mocha is used for API unit testing to ensure endpoint stability.
- Tests ensure consistency between API consumers and providers.

## Cypress End-to-End Contract Testing
How to Run Cypress Tests:
Install Cypress:
```sh
npm install cypress --save-dev
```
Open Cypress test runner:
```sh
npx cypress open
```
Run the tests from the Cypress UI.
Alternatively, run tests in headless mode:
```sh
npx cypress run
```
Output:
Cypress provides a detailed UI for test execution.
Screenshots and videos are captured for failed tests.
Test results are displayed in the terminal for headless mode.

## Frontend UI
- The UI fetches and displays the inventory in a **table format**.
- CSS is used to style the UI, aligning elements such as the **title, images, and inventory list**.


## Notes
- The UI font can be customized by adding locally downloaded fonts.
- The **favicon and images** are integrated and positioned using CSS.
- The project is compatible with **Linux, Windows, and macOS**.

