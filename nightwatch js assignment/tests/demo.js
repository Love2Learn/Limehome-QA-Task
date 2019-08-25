module.exports = {
  'Online_checkin service_limehome' (browser) {
    var val;
    browser
      .url('https://limehome-qa-task.herokuapp.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Online check-in | Limehome')
      .assert.visible('#mat-input-0')
      .setValue('#mat-input-0', 'Ranjita')
      .assert.visible('#mat-input-1')
      .setValue('#mat-input-1', '123456')
      .waitForElementVisible('button[type=submit]',  2000)
      .pause(1000)
      .click('button[type=submit]')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#mat-input-3', 2000)
      .assert.visible('#mat-input-3')
      .pause(1000)
      .getValue('#mat-input-3', (val) => browser.assert.equal(val.value, "Ranjita"))
      browser.end();
  }
};