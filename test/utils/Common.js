const Login = require('../pageObject/credentials/Login');
const Logout = require('../pageObject/credentials/Logout');
const Helper = require('../helper/main');
const CONFIG = require('../config.js');
const CONSTANT = require('../constant');

logInSlash = () => {
    console.log('!!! Login !!!');
    Helper.BrowserHandler.navigate(CONSTANT.PATH.APP_INDEX);
    Login.submitLoginFormWithValidCred(CONFIG.credentials.username, CONFIG.credentials.password);
    Helper.ElementHandler.verifyURL(CONSTANT.PATH.APP_INDEX);
    return this;
};

logOutSlash = () => {
    console.log('!!! Logout !!!');
    Logout.navigateToLoginPage();
    return this;
};

module.exports = {
    logInSlash: logInSlash,
    logOutSlash: logOutSlash,
} 
