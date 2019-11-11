exports.config = {
  tests: '../tests/talkdesk/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.talkdesk.com',
      browser: 'chrome',
      keepCookies: true,
      keepBrowserState: true,
      restart: false,
      windowSize: 'maximize'
    }
  },
  include: {
    I: '../steps_file.js',
    talkdesk: '../pages/talkdesk/talkdesk.js'
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