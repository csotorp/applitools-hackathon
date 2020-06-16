import { browser } from "../../support/wrappers/browser.wrapper";
import { header } from "../../support/page-objects/header.region";
import { filter } from "../../support/page-objects/filter.region";
import { main, productItem } from "../../support/page-objects/main.region";

const productList = require('../../support/fixtures/product-grid').productGrid;

describe('Task 1 - Visual', function() {   
    beforeEach(function() { 
        browser.visit('V1');
    })

    context('1200x700 viewport', function() {
        beforeEach(function() {
            browser.setViewport('laptop');
        });

        it('should show logo', function() {
            header.shouldHaveLogo();
        });

        it('should show main menu', function() {
            header.shouldHaveMainMenu();
        });

        it('should show search bar', function() {
            header.shouldHaveSearchBar();
        });

        it('should show all access, wishlist and cart options', function() {
            header.shouldHaveOptions({ access: true, wish: true, cart: true, cartCount: 2 });
        });

        it('should show filters', function() {
            filter.shouldBeVisible();
        });

        it('should show banner', function() {
            main.shouldHaveBanner();
        });

        it('should show sort and view switcher options', function() {
            main.shouldHaveOptions({ sort: true, filters: false, viewSwithcer: true });
        });

    });

    context('768x600 viewport', function() {
        beforeEach(function() {
            browser.setViewport('tablet');
        });

        it('should show logo', function () {
            header.shouldHaveLogo();
        });

        it('should hide main menu', function () {
            header.shouldHaveMainMenu(false);
        });

        it('should show search bar', function () {
            header.shouldHaveSearchBar();
        });

        it('should show only access and cart tools', function () {
            header.shouldHaveOptions({ access: true, wish: false, cart: true, cartCount: 2 });
        });

        it('should hide filters', function () {
            filter.shouldBeVisible(false);
        });

        it('should show banner', function() {
            main.shouldHaveBanner();
        });

        it('should show sort and filter options', function() {
            main.shouldHaveOptions({ sort: true, filters: true, filtersLbl: true, viewSwithcer: false });
        });
        
    });
    
    context('iPhone X Portrait', function() {
        beforeEach(function() {
            if (browser.name() === 'chrome') {
                browser.setViewport('iphone-x');
            } else {
                this.skip();
            }
        });

        it('should show logo', function () {
            header.shouldHaveLogo();
        });

        it('should hide main menu', function () {
            header.shouldHaveMainMenu(false);
        });

        it('should show mobile search bar', function () {
            header.shouldHaveSearchBar({ mobile: true });
        });

        it('should show only access and cart tools without cart item count', function () {
            header.shouldHaveOptions({ access: true, wish: false, cart: true, cartCount: false });
        });

        it('should hide filters', function () {
            filter.shouldBeVisible(false);
        });

        it('should show banner', function() {
            main.shouldHaveBanner();
        });

        it('should show sort and filter options without filter label', function() {
            main.shouldHaveOptions({ sort: true, filters: true, filtersLbl: false, viewSwithcer: false });
        });

    });

});