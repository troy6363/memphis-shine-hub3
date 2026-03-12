
import { chromium } from 'playwright';

(async () => {
    // Set HOME if missing, though we'll inject it via shell too
    if (!process.env.HOME) {
        process.env.HOME = "C:\\Users\\Troy";
    }

    console.log("Starting browser...");
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    console.log("Navigating to localhost:8080...");
    try {
        await page.goto('http://localhost:8080', { waitUntil: 'networkidle' });
        console.log("Page loaded.");

        // Check for chat widget
        // The widget injects an iframe or div. We can check for the script or the resulting element.
        // The script puts a shadow host or iframe usually.
        // Let's check for the script tag
        const script = await page.$('script[data-widget-id="69ab873a03fc837e472b70a9"]');
        if (script) {
            console.log("SUCCESS: Chat widget script found in DOM.");
        } else {
            console.error("FAILURE: Chat widget script NOT found.");
        }

        // Take a screenshot
        await page.screenshot({ path: 'verification.png' });
        console.log("Screenshot saved to verification.png");

    } catch (e) {
        console.error("Error visiting page:", e);
    } finally {
        await browser.close();
    }
})();
