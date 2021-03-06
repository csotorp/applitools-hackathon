const devices = Cypress.config('devices');
var _currentDevice;

export const browser = {
  name: () => Cypress.browser.name,

  allDevices: ()  => devices,

  currentDevice: () => _currentDevice,

  setViewport(deviceType){
    const device = devices.find(_device => _device.deviceType == deviceType);
    _currentDevice = device;
    (device.deviceType == 'laptop' || device.deviceType == 'tablet') 
      ? cy.viewport(device.width, device.height)
      : cy.viewport(device.deviceType, device.screenOrientation);
  },

  visit(version){
    if (version == 'V1') cy.visit('/gridHackathonV1.html') 
    else if (version == 'V2') cy.visit('/gridHackathonV2.html') 
    else throw new Error('Version not recognized');
  }
}