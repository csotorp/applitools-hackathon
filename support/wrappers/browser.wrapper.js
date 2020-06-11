const devices = [
    { deviceName: 'Laptop', width: 1200, height: 700, current: false},
    { deviceName: 'Tablet', width: 768, height: 700,  current: false},
    { deviceName: 'iphone-x', screenOrientation: 'portrait', current: false}
];

export const browser = {

    name: () => Cypress.browser.name,

    viewport: () => Cypress.browser.name,

    device: () => Cypress.browser.name,

    setViewport(device){
        const d = devices.find(_device => _device.deviceName == device);
        (d.deviceName == 'iphone-x') ? cy.viewport(d.deviceName, d.screenOrientation)
                                     : cy.viewport(d.width, d.height);
    },

    visit(version){
        version == 'V1' ? cy.visit('/gridHackathonV1.html') :
        version == 'V2' ? cy.visit('/gridHackathonV2.html') :
        cy.log('Version not recognized');
    }

}