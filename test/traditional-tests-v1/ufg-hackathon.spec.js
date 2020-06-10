import { browser } from "../../support/wrappers/browser.wrapper";
import { header } from "../../support/page-objects/header.section";
import { filter } from "../../support/page-objects/filter.section";

const baseUrl = 'demo.applitools.com/gridHackathonV1.html'

describe('UFG Hackathon Desktop', () => { 
    
    beforeEach(() => { 
        browser.visit(baseUrl);
    })

    context('1200x700 Resolution', () => {
        before(() => {
            browser.setViewport( { width: 1200, height: 700 } );
        });

        it('Cross-Device Elements Test', function () {
            header.shouldHaveLogo();
            header.shouldHaveMainMenu();
            header.shouldHaveSearchBar();
            header.shouldHaveTools({ access: true, wish: true, cart: true, cartCount: 2 });
            filter.shouldBeVisible();
        });

    });

    context('768x600 Resolution', () => {
        before(() => {
            browser.setViewport( { width: 768, height: 600 } );
        });

        it('Cross-Device Elements Test', function () {
            header.shouldHaveLogo();
            header.shouldHaveMainMenu(false);
            header.shouldHaveSearchBar();
            header.shouldHaveTools({ access: true, wish: false, cart: true, cartCount: 2 });
            filter.shouldBeVisible(false);
        });

    });

});

describe('UFG Hackathon Mobile', () => {

    before(function() {
        if (browser.name() === 'chrome') {
            browser.visit(baseUrl);
        } else {
            this.skip();
        }
    });

    context('iPhone X Portrait', () => {
        before(() => {
            browser.setViewport('iphone-x');
        });

        it('Cross-Device Elements Test ', function () {

            header.shouldHaveLogo();
            header.shouldHaveMainMenu(false);
            header.shouldHaveSearchBar({ mobile: true });
            header.shouldHaveTools({ access: true, wish: false, cart: true, cartCount: false });
            filter.shouldBeVisible(false);
        });

    });

});