const expect = require('chai').expect;

class ElementHandler {
    /**
    * @param {string} locator    Element for wait
    */
    waitForElement(locator) {
        browser.waitForVisible(locator, 30000, false);
        return this;
    }

    /**
    * @param {string} locator    Element for wait
    */
    waitForElementExit(locator) {
        browser.waitForExist(locator, 30000, false);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementVisible(locator) {
        expect($(locator).isVisible(), "Element " + locator + " does not visible").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementNotVisible(locator) {
        expect($(locator).isVisible(), "Element " + locator + " does not visible").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementExisting(locator) {
        expect($(locator).isExisting(), "Element " + locator + " does not exist").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementNotExisting(locator) {
        expect($(locator).isExisting(), "Element " + locator + " does exist").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementDisplayed() {
        expect($(locator).isDisplayed(), "Element " + locator + " is not displayed").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementNotDisplayed(locator) {
        expect($(locator).isDisplayed(), "Element " + locator + " is displayed").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementEnabled(locator) {
        expect($(locator).isEnabled(), "Element " + locator + " is not enabled").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementDisabled(locator) {
        expect($(locator).isEnabled(), "Element " + locator + " is not disabled").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} text       Text for verify
    */
    verifyText(locator, text) {
        expect($(locator).getText()).to.equal(text);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    getText(locator) {
        return $(locator).getText();
    }

    /**
    * @param {string} locator    Element for verify
    */
    getValue(locator) {
        return $(locator).getValue();
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} width    Element for verify
    * @param {number} height   Element for verify
    */
    verifyElementSize(locator, width, height) {
        let elementSize = $(locator).getElementSize();
        expect(elementSize.width).to.equal(width);
        expect(elementSize.height).to.equal(height);
        return this;
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} value    Color for verify
    */
    verifyElementColor(locator, attribute, value) {
        let elementColor = $(locator).getCssProperty(attribute);
        expect(elementColor.parsed.hex).to.equal(value);
        return this;
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} value    Position for verify
    */
    verifyElementPosition(locator, attribute, value) {
        let elementPosition = $(locator).getCssProperty(attribute);
        expect(elementPosition.value).to.equal(value);
        return this;
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} width    Element for verify
    * @param {number} height   Element for verify
    */

    verifyElementSizeDragAndDrop(locator, width, height) {
        let elementSize = $(locator).getElementSize();
        expect(elementSize.width >= width).to.equal(true);
        expect(elementSize.height >= height).to.equal(true);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} text       Text for verify
    */
    verifyTextContains(locator, text) {
        this.waitForElement(locator);
        expect($(locator).getText()).to.include(text);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    getAttribute(locator, attribute) {
        return $(locator).getAttribute(attribute);
    }


    /**
    * @param {string} title    Element for verify
    */
    verifyTitle(title) {
        browser.waitUntil(() => {
            return browser.title().value === title;
        }, 30000, `${title} is not correct`);
        return this;
    }

    /**
    * @param {string} url    URL for verify
    */
    verifyURL(url) {
        browser.waitUntil(() => {
            return browser.getUrl() === url;
        }, 30000, `${url} is not correct`);
        return this;
    }

    /**
    * @param {string} text    text for verify
    */
    verifyAlertText(text) {
        let alertText = browser.alertText()
        expect(alertText).to.equal(text);
        browser.alertAccept();
        return this;
    }

    /**
    * @param {string} locator    Element for set value
    * @param {string} value    Value for enter
    */
    setValue(locator, value) {
        browser.waitForVisible(locator, 30000, false);
        $(locator).setValue(value);
        return this;
    }

    /**
    * @param {string} locator    Element for set value
    * @param {string} value    Value for enter
    */
    addValue(locator, value) {
        browser.waitForVisible(locator, 30000, false);
        $(locator).addValue(value);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} value       Value for verify
    */
    verifyValue(locator, value) {
        expect($(locator).getValue()).to.equal(value);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {number} value       Value for verify
    */

    verifyNumberOfElements(locator, value) {
        expect($$(locator).length).to.equal(value)
        return this
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} attribute    Attribute for verify
    * @param {string} value    Value for verify
    */
    verifyAttribute(locator, attribute, value) {
        let result = this.getAttribute(locator, attribute)
        expect(result).to.include(value);
        return this;
    }


    /**
    * @param {string} locator    Element for verify
    * @param {string} attribute    Attribute for verify
    * @param {string} value    Value for verify
    */
    verifyAttributeIsNotIncludeValue(locator, attribute, value) {
        let result = this.getAttribute(locator, attribute)
        expect(result).to.not.include(value);
        return this;
    }

    /**
   * @param {string} locator    Element for verify
   */
    waitForElementClickable(locator) {
        $(locator).waitForVisible(3000);
        $(locator).waitForEnabled(3000);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    click(locator) {
        this.waitForElementClickable(locator);
        $(locator).click();
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} filePath    filePath for upload
    */
    chooseFile(locator, filePath) {
        browser.chooseFile(locator, filePath);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    moveToObject(locator) {
        browser.moveToObject(locator)
        return this;
    }

    /**
    * @param {string} sourceLocator    Element for verify
    * @param {string} destinationLocator    Element for verify
    */
    dragAndDrop(sourceLocator, destinationLocator) {
        this.waitForElement(sourceLocator)
        this.waitForElement(destinationLocator)
        browser.dragAndDrop(sourceLocator, destinationLocator)
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    buttonUp(locator) {
        this.waitForElementClickable(locator)
        browser.buttonUp(locator)
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    buttonDown(locator) {
        this.waitForElementClickable(locator)
        browser.buttonDown(locator)
        return this;
    }
}


module.exports = new ElementHandler();