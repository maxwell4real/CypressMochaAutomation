import {login} from "./loginpage";

var {Given} = require('cucumber');

Given(/^I am on the home page$/,  () => {
    cy.visit('/index.php')
});
Given(/^I click the sign in link$/,  () => {
    login.clickSignIn()
});
Given(/^I enter email "([^"]*)" in the email field$/, (myemail) => {
    login.enterEmail(myemail)
});
Given(/^I enter password "([^"]*)" in the password field$/, (mypassword) => {
    login.enterPassword(mypassword)
});
When(/^I click the login button$/, () => {
    login.clickLoginIn()
});
Then(/^I verify "([^"]*)" on my detail page$/, (expectedName) => {
    login.verifyLoginUser(expectedName)
});
Then(/^I sign out$/, () => {
    login.clickSignOut()
});
Given(/^I enter email in the forgot password field$/, function () {

});
Given(/^I click on the forgot password link$/, function () {

});
Given(/^I click retrive password button$/, function () {

});