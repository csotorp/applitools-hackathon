const filename = 'Traditional-V1-TestResults.txt';

/**
 * Helper fn to print test results in following format:
 * Task: <Task Number>, Test Name: <Test Name>, Browser: <Browser>, Viewport: <Width x Height>, Device: <Device type>, Status: <passed | failed>
 * 
 * Sample test: Task: 1, Test Name: should show search bar, Browser: chrome, Viewport: 1200 x 700, Device: laptop, Status: passed
 * 
 * @param message.task int - 1, 2 or 3
 * @param message.testName string - Something meaningful. E.g. 1.1 Search field is displayed
 * @param message.state boolean - The result of comparing the "Expected" value and the "Actual" value.
 */
export function reporter(message) {
  if (message.status != 'pending') {
  // Had to use hardcoded viewport for iphone-x report because I'm using a Cypress preset
  // and there is no easy way to programmatically get current viewport.
    let _viewport;
    (message.device.deviceType == 'iphone-x') 
      ? _viewport = '375 x 812'
      : _viewport = `${message.device.width} x ${message.device.height}`;
    cy.writeFile(filename,
      `Task: ${message.task}, `+
      `Test Name: ${message.testName}, `+
      `Browser: ${message.browserName}, `+ 
      `Viewport: ${_viewport}, `+
      `Device: ${message.device.deviceType}, `+
      `Status: ${message.status}\n`,
      { flag: 'a+' }
    );
  }
}