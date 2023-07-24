const { Selector } = require("testcafe");

fixture`Login Suite`
.page`https://www.saucedemo.com/v1/`
test('Valid Login', async(t)=>{
    await t
    .typeText("#user-name", "standard_user")
    .typeText("#password", "secret_sauce")
    .click("#login-button")
    .expect(Selector(".product_label").innerText).eql("Products")
});