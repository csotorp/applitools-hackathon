// ***********************************************************
// support/index.js is processed and loaded automatically before test files.
//
// This is a great place to put global configuration and behavior that modifies Cypress.
//
// Location was changed using 'supportFile' configuration option.
//
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@applitools/eyes-cypress/commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})