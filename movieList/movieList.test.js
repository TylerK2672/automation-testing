const {Builder, Capabilities, By} = require('selenium-webdriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => 
{
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

afterAll(async () =>
{
    await driver.quit()
})

test('I can add a movie', async () =>
{
    await driver.findElement(By.id('searchBar')).sendKeys('hello\n');
    await driver.sleep(3000)
})

test('I can delete a movie', async () =>
{
    await driver.findElement(By.xpath(`//*[text()="x"]`)).click()
})

test('Delete text works properly', async () =>
{
    const message = await driver.findElement(By.id(`message`));
    await driver.sleep(3000)

    expect(message).toBeTruthy()
})