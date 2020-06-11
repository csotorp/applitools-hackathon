import { browser } from "../../support/wrappers/browser.wrapper";
import { reporter } from "../../support/wrappers/reporter.wrapper";
import { header } from "../../support/page-objects/header.section";
import { filter } from "../../support/page-objects/filter.section";

describe('UFG Hackathon', function() { 
    
    beforeEach(function() { 
        browser.visit('V1');
    })

    context('1200x700 Resolution', function() {

        before(function() {
            browser.setViewport('Laptop');
        });

        it('Cross-Device Elements Test', function() {
            header.shouldHaveLogo();
            header.shouldHaveMainMenu();
            header.shouldHaveSearchBar();
            header.shouldHaveTools({ access: true, wish: true, cart: true, cartCount: 2 });
            filter.shouldBeVisible();
        });

    });

    context('768x600 Resolution', function() {
        before(function() {
            browser.setViewport('Tablet');
        });

        it('Cross-Device Elements Test', function () {
            header.shouldHaveLogo();
            header.shouldHaveMainMenu(false);
            header.shouldHaveSearchBar();
            header.shouldHaveTools({ access: true, wish: false, cart: true, cartCount: 2 });
            filter.shouldBeVisible(false);
        });
        
    });
    
    context('iPhone X Portrait', function() {

        before(function() {
            if (browser.name() === 'chrome') {
                browser.setViewport('iphone-x');
            } else {
                this.skip();
            }
        });

        it('Cross-Device Elements Test', function () {
            header.shouldHaveLogo();
            header.shouldHaveMainMenu(false);
            header.shouldHaveSearchBar({ mobile: true });
            header.shouldHaveTools({ access: true, wish: false, cart: true, cartCount: false });
            filter.shouldBeVisible(false);
        });

    });

});