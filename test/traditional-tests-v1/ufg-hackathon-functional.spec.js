import { browser } from "../../support/wrappers/browser.wrapper";
import { header } from "../../support/page-objects/header.page";
import { main } from "../../support/page-objects/main.page";
import { productItem } from "../../support/page-objects/productItem.page";
import { footer } from "../../support/page-objects/footer.page";

const productList = require('../../support/fixtures/product-grid').productGrid;

describe('Task 1 - Functional', function() {   
    before(function() { 
        browser.visit('V1');
    });

    browser.devices().forEach(function (device) { 
        context(device.deviceType + ' viewport', function () {
            beforeEach(function() {
                if (device.deviceType === 'iphone-x' && browser.name() != 'chrome') {
                    this.skip();
                }
                browser.setViewport(device.deviceType);
            });

            it('should always show logo', function () {
                header.shouldShowLogo();
            });

            it('should always show banner', function() {
                main.shouldShowBanner();
            });

            productList.forEach(function (product) {
                product.idx = productList.indexOf(product);

                it('should show ' + product.title + ' product and price', function () {
                    productItem.shouldShowProductDetails(product);
                });

                if (product.promo) {
                    it('should show ' + product.title + ' promo details', function () {
                        productItem.shouldShowPromoDetails(product);
                    });
                } else {
                    it('should not show promo for' + product.title, function () {
                        productItem.shouldShowPromoDetails(product);
                    });
                }
            });

            it('should always show footer bottom row', function() {
                footer.shouldShowLocalization();
                footer.shouldShowAdditionalLinks();
            });    

        });

    });

});