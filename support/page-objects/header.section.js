const els = {

    mainHeader: () => cy.get('.main_header'),
    logo: () => els.mainHeader().find('#logo'),
    menu: () => els.mainHeader().find('.main-menu ul'),

    searchBar: () => cy.get('.main_nav .custom-search-input'),
    searchInput: () => els.searchBar().find('input'),
    searchBtn: () => els.searchBar().find('button'),

    tools: () => cy.get('.top_tools'),
    access: () => els.tools().find('a.access_link'),
    wishlist: () => els.tools().find('a.wishlist'),
    cart: () => els.tools().find('a.cart_bt'),
    cartItemCount: () => els.cart().find('strong'),

    mobileSearchBtn: () => els.tools().find('a.btn_search_mob')
}

export const header = {

    shouldHaveLogo(reverse) {
        (reverse === undefined || reverse) 
            ? els.logo().should('be.visible') 
            : els.logo().should('not.be.visible')
    },

    shouldHaveMainMenu(reverse) {
        (reverse === undefined || reverse)
            ? els.menu().should('be.visible').children().should('have.length', 5)
            : els.menu().should('not.be.visible')
    },

    shouldHaveSearchBar(device) {
        if (device && device.mobile) {
            els.mobileSearchBtn().should('be.visible');
            els.searchInput().should('not.be.visible');
            els.searchBtn().should('not.be.visible');
        } else {
            els.searchInput()
                .should('be.visible')
                .and('have.attr', 'placeholder', 'Search over 10,000 shoes!')
                .and('have.value', '');
            els.searchBtn().should('be.visible').and('be.enabled');
            els.mobileSearchBtn().should('not.be.visible');
        }
    },

    shouldHaveTools(tools) {
        tools.access ? els.access().should('be.visible') : els.access().should('not.be.visible')
        tools.wish ? els.wishlist().should('be.visible') : els.wishlist().should('not.be.visible')
        tools.cart ? els.cart().should('be.visible') : els.cart().should('not.be.visible')
        tools.cartCount ? els.cartItemCount().should('be.visible').and('have.text', tools.cartCount) 
                        : els.cartItemCount().should('not.be.visible')

    }
    
}