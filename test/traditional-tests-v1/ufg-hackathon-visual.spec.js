import { browser } from "../../support/wrappers/browser.wrapper";
import { header } from "../../support/page-objects/header.page";
import { filter } from "../../support/page-objects/filter.page";
import { main } from "../../support/page-objects/main.page";
import { productItem } from "../../support/page-objects/productItem.page";
import { footer } from "../../support/page-objects/footer.page";

describe('Task 1 - Visual', function() {   
    before(function() { 
        browser.visit('V1');
    })

    context('laptop viewport', function() {
        beforeEach(function() {
            browser.setViewport('laptop');
        });

        it('should show main menu', function() {
            header.shouldShowMainMenu();
        });

        it('should show search bar', function() {
            header.shouldShowSearchBar();
        });

        it('should show all access, wishlist and cart options', function() {
            header.shouldShowOptions({ access: true, wish: true, cart: true, cartCount: 2 });
        });

        it('should show filters', function() {
            filter.shouldBeVisible();
        });

        it('should show sort and view switcher options', function() {
            main.shouldShowOptions({ sort: true, filters: false, viewSwithcer: true });
        });

        it('should hide product options', function() {
            productItem.shouldShowProductOptions(false);
        });

        it('should show footer collapsibles expanded', function() {
            footer.shouldShowCollapsibles({ expanded: true});
        });

    });

    context('tablet viewport', function() {
        beforeEach(function() {
            browser.setViewport('tablet');
        });

        it('should hide main menu', function () {
            header.shouldShowMainMenu(false);
        });

        it('should show search bar', function () {
            header.shouldShowSearchBar();
        });

        it('should show only access and cart tools', function () {
            header.shouldShowOptions({ access: true, wish: false, cart: true, cartCount: 2 });
        });

        it('should hide filters', function () {
            filter.shouldBeVisible(false);
        });

        it('should show sort and filter options', function() {
            main.shouldShowOptions({ sort: true, filters: true, filtersLbl: true, viewSwithcer: false });
        });

        it('should show product options', function() {
            productItem.shouldShowProductOptions();
        });

        it('should show footer collapsibles expanded', function() {
            footer.shouldShowCollapsibles({ expanded: true});
        });
        
    });
    
    context('iphone-x viewport', function() {
        beforeEach(function() {
            if (browser.name() === 'chrome') {
                browser.setViewport('iphone-x');
            } else {
                this.skip();
            }
        });

        it('should hide main menu', function () {
            header.shouldShowMainMenu(false);
        });

        it('should show mobile search bar', function () {
            header.shouldShowSearchBar({ mobile: true });
        });

        it('should show only access and cart tools without cart item count', function () {
            header.shouldShowOptions({ access: true, wish: false, cart: true, cartCount: false });
        });

        it('should hide filters', function () {
            filter.shouldBeVisible(false);
        });

        it('should show sort and filter options without filter label', function() {
            main.shouldShowOptions({ sort: true, filters: true, filtersLbl: false, viewSwithcer: false });
        });
        
        it('should show product options', function() {
            productItem.shouldShowProductOptions();
        });

        it('should show footer collapsed', function() {
            footer.shouldShowCollapsibles({ expanded: false});
        });

    });

});