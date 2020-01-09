const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async() => {
    try {
        await openBrowser();
        await goto("http://www.google.com");
        await write("unmesh gundecha");
        await click("Google Search");
    } catch (error) {
        console.error(error);
    } finally {
        closeBrowser();
    }
    
})();