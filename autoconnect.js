const puppeteer = require("puppeteer");
console.log(
  "\x1b[1;34m%s\x1b[0m",
  "LOGGING IN..............................................................................."
);

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the WiFi login page
  await page.goto("http://10.0.0.1:8090/httpclient.html");

  // Find and interact with the username and password fields (replace with actual selectors)
  await page.type("#username", "$USER");
  await page.type("#password", "$PWD");

  // Click the button using its ID (replace 'button-id' with your actual button ID)
  await page.click("#loginbutton");

  await new Promise((resolve) => setTimeout(resolve, 4000));

  process.exit();

  // Close the browser
})();
