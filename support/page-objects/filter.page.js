const rgs = {
  filters: () => cy.get('#filter_col')
}

export const filter = {

  shouldBeVisible(reverse) {
    (reverse === undefined || reverse) 
      ? rgs.filters().should('be.visible') 
      : rgs.filters().should('not.be.visible');
  }   
}