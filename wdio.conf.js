const CONFIG = require('./test/config.js');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const reportFolder = path.join('reports');
const screenshotFolder = path.join('screenshot')

exports.config = {
  specs: [
    //Fro running test scipt
    `./test/testScripts/${CONFIG.folderTest}-test/attachment.js`,
    `./test/testScripts/${CONFIG.folderTest}-test/text.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/datetime.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/tabs.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/alert.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/textarea.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/spinner.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/label.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/dialog.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/fieldgroup.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/colorpicker.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/icon-button.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/normalButton.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/submitButton.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/radio-button.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/multiplechoice.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/notify-popup.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/checkbox.js`,

    // `./test/testScripts/${CONFIG.folderTest}-test/dropdown.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/table.js`,

  ],

  suites: {
    preparation: [
      './test/testScripts/preparation/importSource.js'
    ],
  },

  maxInstances: 1,
  //Server Info for Chrome
  host: 'localhost',
  port: 4444,

  //Testing Browser Info
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      // to run chrome headless the following flags are required
      // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
      args: ['--headless', '--disable-gpu', 'no-sandbox', "--window-size=1920,1080"],
    },
    proxy: {
      proxyType: 'autodetect'
    }
  }],
  before: function () {
    if (!fs.existsSync(reportFolder)) {
      fs.mkdirSync(reportFolder);
    }
    if (!fs.existsSync(screenshotFolder)) {
      fs.mkdirSync(screenshotFolder);
    }
  },
  afterTest: function (test) {
    // if test passed, ignore, else take and save screenshot.
    if (test.passed) {
      return;
    }
    const datetime = moment().format('YYYYMMDD-HHmmss.SSS');
    const filepath = path.join(screenshotFolder, datetime + '.png');
    browser.saveScreenshot(filepath);
  },
  reporters: ['spec', 'html-format'],
  reporterOptions: {
    htmlFormat: {
      outputDir: reportFolder,
      screenshotPath: screenshotFolder,
    },
  },

  services: ['selenium-standalone'],
  sync: true,
  deprecationWarnings: false,

  //Testing Framework Info
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 900000, //10 minutes
  },
  logLevel: 'silent'
};
