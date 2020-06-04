describe('UFG Hackathon', () => {

    it('Task 1', function () {

        cy.visit('demo.applitools.com/gridHackathonV2.html');

        cy.eyesOpen({
            appName: 'Applifashion',
            testName: 'Task 1',
        });

        cy.eyesCheckWindow({
            tag: 'Cross-Device Elements Test',
            target: 'window',
            fully: true
        });

        cy.eyesClose();
    });

});