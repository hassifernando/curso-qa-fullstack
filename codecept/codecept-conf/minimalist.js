exports.config = {
  tests: '../tests/minimalist/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://www.getminimalist.com',
      browser: 'chrome',
      keepCookies: true,
      keepBrowserState: true,
      restart: false,
      windowSize: 'maximize'
    }
  },
  include: {
    I: '../steps_file.js',
    minimalist: '../pages/minimalist/minimalist.js'
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