import { browser as currentBrowser} from './browser.wrapper';

// Get the browser, viewport and device info from browser.wrapper
const browser = currentBrowser.name();
const viewport = currentBrowser.viewport();
const device = currentBrowser.device();

/**
 * A Helper to print the test result in the following format:
 * Task: <Task Number>, Test Name: <Test Name>, DOM Id:: <id>, Browser: <Browser>, Viewport: <Width x Height>, Device<Device type>, Status: <Pass | Fail>
 * 
 * Example: Task: 1, Test Name: Search field is displayed, DOM Id: DIV__customsear__41, Browser: Chrome, Viewport: 1200 x 700, Device: Laptop, Status: Pass
 * 
 * @param task int - 1, 2 or 3
 * @param testName string - Something meaningful. E.g. 1.1 Search field is displayed
 * @param domId string - DOM ID of the element
 * @param state boolean - The result of comparing the "Expected" value and the "Actual" value.
 */

export function reporter(task, testName, domId, state) {
    cy.writeFile('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, ` + 
    `Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(state ? "Pass" : "Fail")}\n`,
    { flag: 'a+' });
}