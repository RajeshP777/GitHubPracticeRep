// Simple Alert, Confirmation Alert, Prompt Alert:

import {test,expect} from "@playwright/test";


test("Simple Alert",async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.click('#alertBtn')

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        expect(dialog.type('alert'))
        console.log(dialog.message())
        expect(dialog.message('I am an alert box!'))
        await dialog.accept()
        
    })

    await page.waitForTimeout(5000)
})

test("Confirmation Alert",async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')         // Step1

    
    page.on('dialog',async dialog=>{                                        // Step3

        console.log(dialog.type())
        console.log(dialog.message())
        await dialog.dismiss()


    })
    await page.click('#confirmBtn')                                         // Step2
    await expect(page.locator("#demo")).toHaveText('You pressed Cancel!')   // Step4

    await page.pause()                                                      // Step5
    


})

test.only("Prompt Alert",async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        await dialog.accept("Playwright")
    })
    
    await page.click('#promptBtn')
    await expect(page.locator('#demo')).toHaveText('Hello Playwright! How are you today?')

    await page.pause()

})