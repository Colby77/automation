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
    let testMovie = 'The Count of Monte Cristo'
    let movieInput = await driver.findElement(By.id('input'))

    await driver.sleep(2000)

    movieInput.sendKeys(testMovie)

    await driver.sleep(2000)

    movieInput.click()
    
    await driver.sleep(2000)

    await driver.findElement(By.id('add-btn')).click()

    await driver.sleep(2000)

    testMovie = testMovie.replace(/ /g, '')
    await driver.findElement(By.id(testMovie)).click()

    await driver.sleep(2000)
})