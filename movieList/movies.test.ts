import {Builder, Capabilities, By} from "selenium-webdriver"
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('movie site tests', async () => {
    let movieInput = await driver.findElement(By.id('input'))
    movieInput.sendKeys('The Count of Monte Cristo\n')

    await driver.sleep(5000)

    

    await driver.sleep(5000)


})