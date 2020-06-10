const els = {

    filters: () => cy.get('#filter_col')    
}

export const filter = {

    shouldBeVisible(reverse) {
        if ( reverse === undefined || reverse ){
            els.filters().should('be.visible');
        } else {
            els.filters().should('not.be.visible');
        }
    }
    
}