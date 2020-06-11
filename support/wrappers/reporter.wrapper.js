import { browser } from './browser.wrapper';

const filename = 'Traditional-V1-TestResults.txt';

/**
 * A Helper to print the test result in the following format:
 * Task: <Task Number>, Test Name: <Test Name>, Browser: <Browser>, Viewport: <Width x Height>, Device<Device type>, Status: <Pass | Fail>
 * 
 * Example: Task: 1, Test Name: Search field is displayed, Browser: Chrome, Viewport: 1200 x 700, Device: Laptop, Status: Pass
 * 
 * @param message.task int - 1, 2 or 3
 * @param message.estName string - Something meaningful. E.g. 1.1 Search field is displayed
 * @param message.state boolean - The result of comparing the "Expected" value and the "Actual" value.
 */

export function reporter(message) {
    cy.writeFile(filename, `Test Name: ${message.testName}, ` + 
    `Browser: ${browser.name()}, ` + 
    `Status: ${(message.state)}\n`,
    { flag: 'a+' });
}