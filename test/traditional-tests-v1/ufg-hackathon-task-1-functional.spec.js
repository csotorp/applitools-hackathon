import { browser } from "../../support/wrappers/browser.wrapper";
import { productItem } from "../../support/page-objects/main.region";

const productList = require('../../support/fixtures/product-grid').productGrid;

describe('Task 1 - Functional', function() {   
    beforeEach(function() { 
        browser.visit('V1');
    })

    productList.forEach(function (product) {
        it('should show ' + product.title + ' product and price', function () {
            productItem.shouldHaveProductDetails(product.idx, product.title, product.price);
        });
    });

    productList.forEach(function (product) {
        if (!product.promo) { it('should not show promo for' + product.title, function () {
                productItem.shouldHavePromo(product.idx, false);
            });
        }
    });

    productList.forEach(function (product) {
        if (product.promo) { it('should show ' + product.title + ' promo details', function () {
                productItem.shouldHavePromo(product.idx);
                productItem.shouldHavePromoDetails(product.idx, product.promoDisc, product.promoLeft, product.promoPrice);
            });
        }
    });

});