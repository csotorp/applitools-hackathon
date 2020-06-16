const rgs = {
    main: () => cy.get('main'),
    tools: () => rgs.main().find('.toolbox'),
    productItem: (idx) => rgs.main().find('#product_grid .grid_item').eq(idx)
}

const els = {
    bannerDiv: () => rgs.main().find('.top_banner'),

    sortSel: () => rgs.tools().find('select#sort'),
    filtersIco: () => rgs.tools().find('i.ti-filter'),
    filtersLbl: () => rgs.tools().find('.open_filters span'),
    gridViewIco: () => rgs.tools().find('i.ti-view-grid'),
    listViewIco: () => rgs.tools().find('i.ti-view-list'),

    productImg: (idx) => rgs.productItem(idx).find('img.img-fluid'),
    productLbl: (idx) => rgs.productItem(idx).find('h3'),
    priceLbl: (idx) => rgs.productItem(idx).find('.new_price'),

    favIcn: (idx) => rgs.productItem(idx).find('.ti-heart'),
    compareIcn: (idx) => rgs.productItem(idx).find('.ti-control-shuffle'),
    cartIcn: (idx) => rgs.productItem(idx).find('.ti-shopping-cart'),

    offLbl: (idx) => rgs.productItem(idx).find('.off'),
    countdownLbl: (idx) => rgs.productItem(idx).find('.countdown'),
    oldPriceLbl: (idx) => rgs.productItem(idx).find('.old_price'),
}

export const main = {

    shouldHaveBanner(reverse) {
        (reverse === undefined || reverse) 
            ? els.bannerDiv().should('be.visible') 
            : els.bannerDiv().should('not.be.visible');
    },

    shouldHaveOptions(options) {
        options.sort ? els.sortSel().should('be.visible').find(':selected').should('contain.text', 'Sort by popularity')
                     : els.sortSel().should('not.be.visible');
        options.filters ? els.filtersIco().should('be.visible') : els.filtersIco().should('not.be.visible');
        options.filters && options.filtersLbl ? els.filtersLbl().should('be.visible').and('have.text', 'Filters') 
                                              : els.filtersLbl().should('not.be.visible');
        if (options.viewSwithcer) {
            els.gridViewIco().should('be.visible');
            els.listViewIco().should('be.visible');
        } else{
            els.gridViewIco().should('not.be.visible');
            els.listViewIco().should('not.be.visible');
        }
    }

}

export const productItem = {

    shouldHaveProductDetails(idx, title, price) {
        els.productImg(idx).should('be.visible');
        els.productLbl(idx).should('be.visible').and('have.text', title);
        els.priceLbl(idx).should('be.visible').and('have.text', `$${price}.00`);
    },

    shouldHavePromo(idx, reverse) {
        if (reverse === undefined || reverse)  {
            els.offLbl(idx).should('be.visible');
            els.countdownLbl(idx).should('be.visible');
            els.oldPriceLbl(idx).should('be.visible');
        } else{
            els.offLbl(idx).should('not.be.visible');
            els.countdownLbl(idx).should('not.be.visible');
            els.oldPriceLbl(idx).should('not.be.visible');
        }
    },

    shouldHavePromoDetails(idx, discoutn, countdown, oldPrice) {
        els.offLbl(idx).should('have.text', `-${discoutn}%`);
        els.countdownLbl(idx).should('have.text', `${countdown} day left`);
        els.oldPriceLbl(idx).should('have.text', `$${oldPrice}.00`);
    }

}