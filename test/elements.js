//import assert from 'assert';
//const {expect} = require('chai');
const general = require ('./../data/selectors.json').general;
const generalValues = require ('./../data/expected.json').generalValues;
const counter = require ('./../data/selectors.json').counter;
const counterValues = require ('./../data/expected.json').counterValues;

describe('Complex Counter App', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Page title is "Complex Counter App"', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            const title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
        })

    });

    describe('General Elements exist', function () {

        it('TC-002 Verify that the Header is present', function () {
            const actual = $(general.header).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-003 Verify that the Total Result is present', function () {
            const actual = $(general.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-004 Verify that the Add Name Field is present', function () {
            const actual = $(general.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-005 Verify that label for the Add Name Field is present', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-006 Verify that Default Value Field is present', function () {
            const actual = $(general.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Verify that label for Default Value Field is present', function () {
            const actual = $$(general.defaultValueFieldLabel)[$$(general.defaultValueFieldLabel).length-1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-008 Verify that Add Counter button is present', function () {
            const actual = $(general.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe('General Elements value', function () {

        it('TC-009 Verify that the header has a Text "Counters"', function () {
            const actual = $(general.header).getText();
            expect(actual).toEqual(generalValues.header);
        })

        it('TC-010 Verify that Total Result has a text "Total: 0"', function () {
            const actual = $(general.totalResult).getText();
            expect(actual).toEqual(generalValues.totalResult);
        })

        it('TC-011 Verify that Add Name Field has a label "Enter Counter Title"', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(generalValues.addNameFieldLabel);
        })

        it('TC-012 Verify that Add Name Field placeholder text "Counter Name"', function () {
            const actual = $(general.addNameField).getValue();
            expect(actual).toEqual(generalValues.addNameField);
        })

        it('TC-013 Verify that Default Value Field has a label "Enter Initial Count:"', function () {
            const actual = $$(general.defaultValueFieldLabel)[$$(general.defaultValueFieldLabel).length-1].getText();
            expect(actual).toEqual(generalValues.defaultValueFieldLabel);
        })

        it('TC-014 Verify that Default Value Field has a placeholder "50"', function () {
            const actual = $(general.defaultValueField).getValue();
            expect(actual).toEqual(generalValues.defaultValueField);
        })

        it('TC-015 Verify that Add Counter Button has test "ADD COUNTER"', function () {
            const actual = $(general.addCounterBtn).getText();
            expect(actual).toEqual(generalValues.addCounterBtn);
        })
    });

    describe('Default Counter Elements Exist', function () {

        it('TC-016 Verify that the Counter Name is present', function () {
            const actual = $$(counter.counterName)[1].isDisplayed();
            expect(actual).toEqual(true);
        })


    })

});
