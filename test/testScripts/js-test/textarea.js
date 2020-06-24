const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js');

const CONSTRUCTOR_TEXTAREA = "//div[@id='constructor-textarea']//textarea[@class='kuc-textarea']";
const CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA = "//div[@id='constructor-textarea']//div[@class='kuc-textarea-resize']";
const CONSTRUCTOR_BUTTON_TEXTAREA = "//table[@class='bordered_table']/tr[count(//div[@id='constructor-textarea']/ancestor::tr//preceding-sibling::tr)+2]/td[count(//div[@id='constructor-textarea']/parent::td//preceding-sibling::td)+2]";
const GET_VALUE_TEXTAREA = "//div[@id='get-value-textarea']//textarea[@class='kuc-textarea']";
const GET_VALUE_BUTTON_TEXTAREA = "//button[contains(text(), 'Get Value of TextArea')]";
const SET_VALUE_TEXTAREA = "//div[@id='set-value-textarea']//textarea[@class='kuc-textarea']";
const SET_VALUE_BUTTON_TEXTAREA = "//button[contains(text(), 'Set Value of TextArea with string')]";
const SET_VALUE_BUTTON_1_TEXTAREA = "//button[contains(text(), 'Set Value of TextArea without string')]";
const ON_CALL_FUNCTION_TEXTAREA = "//div[@id='on-callback-function-textarea']//textarea[@class='kuc-textarea']";
const ON_TRIGGER_FUNCTION_TEXTAREA = "//textarea[contains(text(),'onCallbackTriggerTextArea')]";
const SHOW_INVISIBLE_TEXTAREA = "//div[@id='show-invisible-textarea']//textarea[@class='kuc-textarea']";
const SHOW_VISIBLE_TEXTAREA = "//div[@id='show-visible-textarea']//textarea[@class='kuc-textarea']";
const SHOW_BUTTON_TEXTAREA = "//button[contains(text(), 'Show TextArea')]";
const HIDE_INVISIBLE_TEXTAREA = "//div[@id='hide-invisible-textarea']//textarea[@class='kuc-textarea']";
const HIDE_VISIBLE_TEXTAREA = "//div[@id='hide-visible-textarea']//textarea[@class='kuc-textarea']";
const HIDE_BUTTON_TEXTAREA = "//button[contains(text(), 'Hide TextArea')]";
const DISABLE_ENABLED_TEXTAREA = "//div[@id='disable-enabled-textarea']//textarea[@class='kuc-textarea']";
const DISABLE_DISABLED_TEXTAREA = "//div[@id='disable-disabled-textarea']//textarea[@class='kuc-textarea']";
const DISABLE_BUTTON_TEXTAREA = "//button[contains(text(), 'Disable TextArea')]";
const ENABLE_ENABLED_TEXTAREA = "//div[@id='enable-enabled-textarea']//textarea[@class='kuc-textarea']";
const ENABLE_DISABLED_TEXTAREA = "//div[@id='enable-disabled-textarea']//textarea[@class='kuc-textarea']";
const ENABLE_BUTTON_TEXTAREA = "//button[contains(text(), 'Enable TextArea')]";

describe('kintoneUIComponent - Text', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[TextArea-2-3-4-5-8] should Verify that the Textbox have the UI is the same as Textbox on kintone - color, - size ( width + height)', function () {
        Helper.ElementHandler
            .verifyElementSize(CONSTRUCTOR_TEXTAREA,297,123)
            .moveToObject(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA)
            .buttonDown(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA)
            .dragAndDrop(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA,CONSTRUCTOR_BUTTON_TEXTAREA)
            .buttonUp(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA)
            .verifyElementSizeDragAndDrop(CONSTRUCTOR_TEXTAREA, 297,123)
    });

    it('[TextArea-18-19] should get the value of TextArea', function () {
        Helper.ElementHandler
            .click(GET_VALUE_BUTTON_TEXTAREA)
            .verifyAlertText('Get Value of TextArea')
    });

    it('[TextArea-23-24] should set the value of TextArea with string and set the value of TextArea without string', function () {
        Helper.ElementHandler
            .verifyValue(SET_VALUE_TEXTAREA,'')
            .click(SET_VALUE_BUTTON_TEXTAREA)
            .verifyValue(SET_VALUE_TEXTAREA,'Set Value with String')
            .click(SET_VALUE_BUTTON_1_TEXTAREA)
            .verifyValue(SET_VALUE_TEXTAREA,'123123')
    });

    it('[TextArea-30-31] should register a callback function for click and change event successfully', function () {
        Helper.ElementHandler
            .click(ON_CALL_FUNCTION_TEXTAREA)
            .verifyAlertText('onCallbackFunctionTextArea has been clicked')
            .addValue(ON_CALL_FUNCTION_TEXTAREA,'onChange callback')
            .click(SET_VALUE_TEXTAREA)
            .verifyAlertText('onCallbackFunctionTextArea has been changed')
    });

    // it('[Textarea-31] should verify that the callback function will be trigger when click on the TextArea', function () {
    //     $(ON_TRIGGER_FUNCTION_TEXTAREA).click();
    //     let alertText = browser.alertText();
    //     expect(alertText).to.equal('onCallbackTriggerTextArea has been clicked');
    //     browser.alertAccept();
    // });

    it('[Textarea-32] should show invisible TextArea and visible TextArea on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(SHOW_INVISIBLE_TEXTAREA)
            .verifyElementVisible(SHOW_VISIBLE_TEXTAREA)
            .click(SHOW_BUTTON_TEXTAREA)
            .verifyElementVisible(SHOW_INVISIBLE_TEXTAREA)
            .verifyElementVisible(SHOW_VISIBLE_TEXTAREA)
    });

    it('[Textarea-33] should hide visible TextArea and hide invisible TextArea on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(HIDE_INVISIBLE_TEXTAREA)
            .verifyElementVisible(HIDE_VISIBLE_TEXTAREA)
            .click(HIDE_BUTTON_TEXTAREA)
            .verifyElementNotVisible(HIDE_INVISIBLE_TEXTAREA)
            .verifyElementNotVisible(HIDE_VISIBLE_TEXTAREA) 
    });

    it('[Textarea-34] should disable the current enable TextArea and disable the current disable TextArea', function () {
        Helper.ElementHandler
            .click(DISABLE_BUTTON_TEXTAREA)
            .verifyElementDisabled(DISABLE_DISABLED_TEXTAREA)
            .verifyElementDisabled(DISABLE_ENABLED_TEXTAREA)
    });
    
    it('[Textarea-35] should enable the disabled TextArea and disable the disabled TextArea', function () {
        Helper.ElementHandler
            .click(ENABLE_BUTTON_TEXTAREA)
            .verifyElementEnabled(ENABLE_DISABLED_TEXTAREA)
            .verifyElementEnabled(ENABLE_ENABLED_TEXTAREA)
    });
});