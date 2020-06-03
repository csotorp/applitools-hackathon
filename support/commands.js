// ***********************************************
// commands.js allows to create various custom commands and overwrite
// existing commands.
//
// They are available to all test files thanks to its import at support/index.js
// ***********************************************
//
// Wraps iframe "body" DOM element to allow chaining more Cypress commands, like ".find(...)"
Cypress.Commands.add('getIframeBody', (selector) => {
    return cy
    .get(selector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
})