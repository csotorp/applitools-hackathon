# Applitools-Hackathon

Applitools UltraFastGrid | Cross Browser Hackathon

## System Requirements

Install [Node.js](https://nodejs.org/en/)

All browsers need to be already installed on local system or CI environment:
* [Chrome V80+](https://www.google.com/chrome/)
* [Firefox v75.0+](https://www.mozilla.org/en-US/firefox/)
* [Latest Edge](https://www.microsoft.com/en-us/edge)

## Project setup

1. Clone this repository and enter the project folder.
2. Set up environment variable `APPLITOOLS_API_KEY`.
   * Linux/Mac: `export APPLITOOLS_API_KEY=<your_key>`
   * Windows: `set APPLITOOLS_API_KEY=<your_key>`
4. Run `npm install`
5. Run `npx eyes-setup`

## Test Execution

To run Modern Visual Approach:
``` 
npm run test:mod
```

To run Traditional Approach: 
```
npm run test:trad
```

I created [develop-v2 branch](https://github.com/csotorp/applitools-hackathon/tree/develop-v2) to work specifically with V2 app, leaving master branch for V1 only.
To execute modern and traditional tests agaisnt V2, use the very same npm commands after swithching into it like so:
``` 
git checkout develop-v2
git pull
```

> Check [Pull reuqest #1](https://github.com/csotorp/applitools-hackathon/pull/1) to see diff between V1 and V2 test code.

### Remarks for Traditional Approach

Edge on Ubuntu/Linux: Sadly, edgechromium stable is not yet available for Ubuntu (needed for Cypress run). 
Only chrome and firefox browsers can be executed:
```
$ npm run test:trad:chrome
$ npm run test:trad:firefox
```
> As Applitools UFG executes tests with devices on their end, this is not an issue for Visual tests.

### Reporter notes

Current Traditional-TestResults file will append results of new test executions. If wanted a new one from scratch, feel free to delete it before npm run.

> Althoguht cross-browser test execution could be done in parallel programmatically, I decided to make it sequential for report tidiness. If I were able to go with another reporting tool, parallel execution whould be my choice.

Note for Windows: PS makes a mess with quotes and glob patterns for spec files matches. `npm run test:trad` will throw and error. 
As a workaround, execute tests for each browser sequentially:
```
 > npm run test:trad:chrome
 > npm run test:trad:firefox
 > npm run test:trad:edge
```