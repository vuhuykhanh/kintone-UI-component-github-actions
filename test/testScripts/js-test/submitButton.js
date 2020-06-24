const Helper = require('../../helper/main.js');

const SUBMIT_BUTTON_CONSTRUCTOR = "//div[@id='submit-button-constructor']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_FULL_OPTIONS = "//div[@id='submit-button-full-options']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_NONETEXT = "//div[@id='submit-button-none-text']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_NONETEXT_SET_TEXT_BUTTON = "//button[text()='Set Text Submit Button']";
const SUBMIT_BUTTON_NONEPARAMETER = "//div[@id='submit-button-none-parameter']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_NONEPARAMETER_SET_TEXT_BUTTON = "//button[text()='Set Text Without Param Submit Button']"
const SUBMIT_BUTTON_SET_TYPE = "//div[@id='submit-button-set-type']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_SET_TYPE_BUTTON = "//button[text()='Set Type Submit Button']";
const SUBMIT_BUTTON_INVISIBLE = "//div[@id='submit-button-show']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_SHOW_BUTTON = "//button[text()='Show Submit Button']";
const SUBMIT_BUTTON_VISIBLE = "//div[@id='submit-button-hide']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_HIDE_BUTTON = "//button[text()='Hide Submit Button']";
const SUBMIT_BUTTON_DISABLE = "//div[@id='submit-button-disable']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_DISABLE_BUTTON = "//button[text()='Disable Submit Button']";
const SUBMIT_BUTTON_ENABLE = "//div[@id='submit-button-enable']//button[contains(@class,'kuc-btn')]";
const SUBMIT_BUTTON_ENABLE_BUTTON = "//button[text()='Enable Submit Button']";
const SUBMIT_BUTTON_ON_TRIGGER = "//div[@id='submit-button-on-trigger']//button[contains(@class,'kuc-btn')]";

describe('kintoneUIComponent - Submit Button', function () {
    it('[Submit button-3] SVerify that the Submit button have the UI is the same as button on kintone', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_CONSTRUCTOR)
            .verifyElementColor(SUBMIT_BUTTON_CONSTRUCTOR, 'background-color', '#3498db')
            .verifyElementColor(SUBMIT_BUTTON_CONSTRUCTOR, 'color', '#ffffff')
    });

    it('[Submit button-5] Verify that can create a button without any options value', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_CONSTRUCTOR)
            .verifyElementDisplayed(SUBMIT_BUTTON_CONSTRUCTOR)
    });

    it('[Submit button-6] Verify that can create a button with full options value contains default value', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_FULL_OPTIONS)
            .verifyElementDisplayed(SUBMIT_BUTTON_FULL_OPTIONS)
    });

    it('[Submit button-16] Verify can set text for button which contains existing text', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_NONETEXT)
            .click(SUBMIT_BUTTON_NONETEXT_SET_TEXT_BUTTON)
            .verifyText(SUBMIT_BUTTON_NONETEXT, 'Submit Button Text Changed')
    });

    it('[Submit button-19] Verify can set the text for Button when using function without parameter', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_NONEPARAMETER)
            .verifyText(SUBMIT_BUTTON_NONEPARAMETER, 'Submit Button None Parameter')
            .click(SUBMIT_BUTTON_NONEPARAMETER_SET_TEXT_BUTTON)
            .verifyText(SUBMIT_BUTTON_NONEPARAMETER, '')
    });

    it('[Submit button-20] Verify can set normal type for button', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_SET_TYPE)
            .verifyAttribute(SUBMIT_BUTTON_SET_TYPE, 'class', 'kuc-btn normal')
            .click(SUBMIT_BUTTON_SET_TYPE_BUTTON)
            .verifyAttribute(SUBMIT_BUTTON_SET_TYPE, 'class', 'kuc-btn submit')
    });

    it('[Submit button-25] Verify that can show invisible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(SUBMIT_BUTTON_INVISIBLE)
            .click(SUBMIT_BUTTON_SHOW_BUTTON)
            .verifyElementDisplayed(SUBMIT_BUTTON_INVISIBLE)
    });

    it('[Submit button-27] Verify that can hide the visible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(SUBMIT_BUTTON_VISIBLE)
            .click(SUBMIT_BUTTON_HIDE_BUTTON)
            .verifyElementNotDisplayed(SUBMIT_BUTTON_VISIBLE)
    });

    it('[Submit button-29] Verify that can disable the current enable Button on UI', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_DISABLE)
            .verifyElementEnabled(SUBMIT_BUTTON_DISABLE)
            .click(SUBMIT_BUTTON_DISABLE_BUTTON)
            .verifyElementDisabled(SUBMIT_BUTTON_DISABLE)
    });

    it('[Submit button-31] Verify that can enable the disabled Button on UI', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_ENABLE)
            .verifyElementDisabled(SUBMIT_BUTTON_ENABLE)
            .click(SUBMIT_BUTTON_ENABLE_BUTTON)
            .verifyElementEnabled(SUBMIT_BUTTON_ENABLE)
    });

    it('[Submit button-34] Verify that the callback function will be trigger when click on the button', function () {
        Helper.ElementHandler
            .waitForElement(SUBMIT_BUTTON_ON_TRIGGER)
            .click(SUBMIT_BUTTON_ON_TRIGGER)
            .verifyAlertText('Submit Button has been clicked')
    });
});