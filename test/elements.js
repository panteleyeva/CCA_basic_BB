//import assert from 'assert';
//const {expect} = require('chai');
const general = require ('./../data/selectors.json').general;
const generalValues = require ('./../data/expected.json').generalValues;

describe('Complex Counter App', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            const title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
        })

    });

    describe('Elements exist', function () {

        it('TC-002 Header', function () {
            const actual = $(general.header).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-003 Total Result', function () {
            const actual = $(general.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-004 Add Name Field', function () {
            const actual = $(general.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-005 Add label name field', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-006 Default Value Field', function () {
            const actual = $(general.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Label for Default Value Field', function () {
            const actual = $$(general.defaultValueFieldLabel)[$$(general.defaultValueFieldLabel).length-1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-008 Add Counter', function () {
            const actual = $(general.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe('Elements value', function () {

        it('TC-010 Header = Counters', function () {
            const actual = $(general.header).getText();
            expect(actual).toEqual(generalValues.header);
        })
    })

});
