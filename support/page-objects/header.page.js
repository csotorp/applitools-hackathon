const rgs = {
  header: () => cy.get('header'),

  mainHeader: () => rgs.header().find('.main_header'),
  search: () => rgs.header().find('.main_nav .custom-search-input'),
  tools: () => rgs.header().find('.top_tools')
}

const els = {
  logoImg: () => rgs.mainHeader().find('#logo img'),
  menuLst: () => rgs.mainHeader().find('.main-menu ul'),

  searchIpt: () => rgs.search().find('input'),
  searchBtn: () => rgs.search().find('button'),

  accessLnk: () => rgs.tools().find('a.access_link'),
  wishlistLnk: () => rgs.tools().find('a.wishlist'),
  cartLnk: () => rgs.tools().find('a.cart_bt'),
  cartItemLbl: () => els.cartLnk().find('strong'),

  mobileSearchLnk: () => rgs.tools().find('a.btn_search_mob')
}

export const header = {

  shouldShowLogo() {
    els.logoImg().should('be.visible');
  },

  shouldShowMainMenu(reverse) {
    (reverse === undefined || reverse)
      ? els.menuLst().should('be.visible').children().should('have.length', 5)
      : els.menuLst().should('not.be.visible');
  },

  shouldShowSearchBar(device) {
    if (device && device.mobile) {
      els.mobileSearchLnk().should('be.visible');
      rgs.search().should('not.be.visible');
    } else {
      els.searchIpt()
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Search over 10,000 shoes!')
        .and('have.value', '');
      els.searchBtn().should('be.visible').and('be.enabled');
      els.mobileSearchLnk().should('not.be.visible');
    }
  },

  shouldShowOptions(options) {
    options.access ? els.accessLnk().should('be.visible') : els.accessLnk().should('not.be.visible');
    options.wish ? els.wishlistLnk().should('be.visible') : els.wishlistLnk().should('not.be.visible');
    options.cart ? els.cartLnk().should('be.visible') : els.cartLnk().should('not.be.visible');
    options.cartCount ? els.cartItemLbl().should('be.visible').and('have.text', options.cartCount) 
                      : els.cartItemLbl().should('not.be.visible');
  }
}