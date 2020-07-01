const rgs = {
    main: () => cy.get('main'),
    productItem: (idx) => rgs.main().find('#product_grid .grid_item').eq(idx)
}

const els = {
    productImg: (idx) => rgs.productItem(idx).find('img.img-fluid'),
    productLbl: (idx) => rgs.productItem(idx).find('h3'),
    priceLbl: (idx) => rgs.productItem(idx).find('.new_price'),

    favIcn: (idx) => rgs.productItem(idx).find('.ti-heart'),
    compareIcn: (idx) => rgs.productItem(idx).find('.ti-control-shuffle'),
    cartIcn: (idx) => rgs.productItem(idx).find('.ti-shopping-cart'),

    offLbl: (idx) => rgs.productItem(idx).find('.off'),
    countdownLbl: (idx) => rgs.productItem(idx).find('.countdown'),
    oldPriceLbl: (idx) => rgs.productItem(idx).find('.old_price')
}

export const productItem = {

    shouldShowProductDetails(product) {
        els.productImg(product.idx).should('be.visible');
        els.productLbl(product.idx).should('be.visible').and('have.text', product.title);
        els.priceLbl(product.idx).should('be.visible').and('have.text', `$${product.price}.00`);
    },

    shouldShowPromoDetails(product) {
        if (product.promo) {
            els.offLbl(product.idx).should('have.text', `-${product.promoDisc}%`);
            els.countdownLbl(product.idx).should('have.text', `${product.promoLeft} day left`);
            els.oldPriceLbl(product.idx).should('have.text', `$${product.promoOldPrice}.00`);
        } else {
            els.offLbl(product.idx).should('not.be.visible');
            els.countdownLbl(product.idx).should('not.be.visible');
            els.oldPriceLbl(product.idx).should('not.be.visible');
        }
    },

    shouldShowProductOptions(reverse) {
        if (reverse === undefined || reverse) {
            els.favIcn(0).should('be.visible');
            els.compareIcn(0).should('be.visible');
            els.cartIcn(0).should('be.visible');
        } else {
            els.favIcn(0).should('not.be.visible');
            els.compareIcn(0).should('not.be.visible');
            els.cartIcn(0).should('not.be.visible');
        }
    }

}