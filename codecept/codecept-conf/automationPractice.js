exports.config = {
  tests: '../tests/automationPractice/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/index.php',
      browser: 'chrome',
      keepCookies: true,
      keepBrowserState: true,
      restart: false,
      windowSize: 'maximize'
    }
  },
  include: {
    I: '../steps_file.js',
    talkdesk: '../pages/talkdesk/talkdesk.js',
    automationPractice: '../pages/automationPractice/automationPractice.js'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept'
}