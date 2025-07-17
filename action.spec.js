import {test,expect} from "@playwright/test";


test("Keyboard Action",async ({page}) => {

    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('//textarea[@name="text1"]').fill("Playwright")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await expect(page.locator('//textarea[@name="text2"]')).toHaveValue('Playwright')
    await page.locator('//button[@id="recaptcha"]').click()

    await page.pause()
 
})

test("Mouse Action",async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//button[@class="dropbtn"]').hover()
    await page.pause()
    
})

test("Right Click",async ({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.locator('//span[@class="context-menu-one btn btn-neutral"]').click({button:'right'})
    await page.pause()
    
})

test.only("Double Click",async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="field1"]').fill('Playwright')
    await page.locator('//button[@ondblclick="myFunction1()"]').dblclick()

    await page.pause()



    
})

test("Drag and Drop",async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const drag = await page.locator('//div[@id="draggable"]')
    const drop = await page.locator('//div[@id="droppable"]')

    await drag.dragTo(drop)
    await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))

    await page.pause()
    
})

test.only("Mouse Scrolling",async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.mouse.wheel(0,3000)
    await page.pause()
    
})