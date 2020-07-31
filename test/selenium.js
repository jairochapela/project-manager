const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');
const { doesNotMatch } = require('assert');

describe("Formulario de login", function () {
  
    it("Inicia sesión con éxito", async function () {
        this.timeout(10000);

        let driver = await new Builder().forBrowser('chrome').build();
        try {
            // Navigate to Url
            await driver.get('http://localhost:3000/login');

            // Introduce email, contraseña y pulsa enter
            await driver.findElement(By.name('email')).sendKeys('jairochapela@gmail.com');
            await driver.findElement(By.name('password')).sendKeys('123456', Key.ENTER);

            let firstResult = await driver.wait(until.elementLocated(By.css('h1')), 10000);

            //console.log(await firstResult.getAttribute('textContent'));
            assert.equal("Bienvenido, Jairo", await (await firstResult.getAttribute('textContent')).trim());

        }
        finally{
            await driver.quit();
        }

    })


    it("No inicia sesión con password incorrecta", async function () {
        this.timeout(10000);

        let driver = await new Builder().forBrowser('chrome').build();

        try {
            // Navigate to Url
            await driver.get('http://localhost:3000/login');

            // Introduce email, contraseña y pulsa enter
            await driver.findElement(By.name('email')).sendKeys('jairochapela@gmail.com');
            await driver.findElement(By.name('password')).sendKeys('adadasdadaf', Key.ENTER);

            let firstResult = await driver.wait(until.elementLocated(By.css('div.alert.alert-danger')), 10000);

            //console.log(await firstResult.getAttribute('textContent'));
            assert.ok(firstResult);

        }
        finally{
            await driver.quit();
        }

    })
})