export const browser = {

    name: () => Cypress.browser.name,

    setViewport(res){
        (typeof res == 'string') ? cy.viewport(res) : cy.viewport(res.width, res.height);
    },

    visit(url){
        cy.visit(url);
    }

}