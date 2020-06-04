import { eyesCheck } from './eyes.wrapper'

describe('UFG Hackathon', () => {

    beforeEach(function() {
        cy.visit('demo.applitools.com/gridHackathonV1.html');
    });

    it('Task 1', function () {
        eyesCheck({ 
            testName: this.test.title,
            testStep: 'Cross-Device Elements Test'
        });
    });

    it('Task 2', function () {
        cy.get('.toolbox').find('a.open_filters').click();
        cy.get('#sidebar_filters').should('be.visible').find('input#colors__Black').click();
        cy.get('button#filterBtn').should('be.enabled').click();
        cy.get('#product_grid').find('.grid_item').should('have.length', 2);
        eyesCheck({ 
            testName: this.test.title,
            testStep: 'Filter Results',
            target: 'region',
            selector: '#product_grid'
        });
    });

});