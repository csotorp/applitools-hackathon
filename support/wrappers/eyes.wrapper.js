/**
 * Helper fn to take screenshots with eyes SDK
 * @param params.testName 
 * @param params.testStep 
 * @param params.target window - will match the entire window | region - will match the requested selector region.
 * @param params.selector region (as selector) to be checked if passed region target.
 */
export function eyesCheck(params) {s
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
