exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        { browserstackLocal: true, opts: { forcelocal: false } },
      ],
    ],
    // add path to the test file
    specs: ['test/specs/test.e2e.js'],
    capabilities: [
      {
        browserName: 'Chrome',
        'bstack:options': {
          browserVersion: '103.0',
          os: 'Windows',
          osVersion: '11'
        }
      },
    ],
    commonCapabilities: {
      'bstack:options': {
        buildName: "bstack-demo",
        buildIdentifier: "${BUILD_NUMBER}",
        projectName: "BrowserStack Sample",
        debug: "true",
        networkLogs: "true",
        consoleLogs: "info"
      }
    },
    // rest of your config goes here...
  };
  exports.config.capabilities.forEach(function (caps) {
    for (let i in exports.config.commonCapabilities)
      caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
  });