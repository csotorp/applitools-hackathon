const els = {

    filters: () => cy.get('#filter_col'),
    
}

export const filter = {

    shouldBeVisible(reverse) {
        (reverse === undefined || reverse) 
            ? els.filters().should('be.visible') 
            : els.filters().should('not.be.visible')
    }
    
}