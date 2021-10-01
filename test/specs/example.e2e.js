describe('Webdriver.io examples', () => {
    it('TC000_My First Test Case', () => {
        browser.url('https://www.google.com/')
        expect(browser).toHaveTitle('Google')
     })
})