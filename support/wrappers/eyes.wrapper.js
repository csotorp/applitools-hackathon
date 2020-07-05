/**
 * Helper fn to take screenshots with eyes API
 * @param params.testName 
 * @param params.testStep
 * @param params.target
 * @param params.selector
 */
export function eyesCheck(params) {

  cy.eyesOpen({
    testName: params.testName,
  });

  if (params.target != 'region') {
    cy.eyesCheckWindow({
      tag: params.testStep,            
      target: 'window',
      fully: true
    });
  } else {
    cy.eyesCheckWindow({
      tag: params.testStep,
      target: 'region',
      selector: params.selector,
    });
  }

  cy.eyesClose();
}
