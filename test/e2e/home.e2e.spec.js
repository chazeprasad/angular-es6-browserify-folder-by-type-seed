/*global browser, by */

describe('E2E: Example', function() {

  beforeEach(function() {
    browser.get('/#/home');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/home');
  });

  it('should show the number defined in the controller', function() {
    var element = browser.findElement(by.css('.title'));
    expect(element.getText()).toEqual('Home...');
  });

});
