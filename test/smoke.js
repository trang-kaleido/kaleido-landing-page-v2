// Smoke test for Kaleido landing page
// Run: node test/smoke.js (requires Playwright chromium installed)
const { chromium } = require('playwright');
const path = require('path');
const fs   = require('fs');

const SCREENSHOTS = path.join(__dirname, '..', 'test-screenshots');
if (!fs.existsSync(SCREENSHOTS)) fs.mkdirSync(SCREENSHOTS, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page    = await browser.newPage();
  const errors  = [];

  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle' });

  // ① Trap
  await page.screenshot({ path: path.join(SCREENSHOTS, '01-trap.png'), fullPage: false });

  // ④ Snap — scroll to hex, wait for assembly
  await page.locator('#snap').scrollIntoViewIfNeeded();
  await page.waitForTimeout(4000);
  await page.screenshot({ path: path.join(SCREENSHOTS, '04-snap-assembled.png'), fullPage: false });

  // ⑤ One Idea — click next card
  await page.locator('#one-idea').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#card-next').click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(SCREENSHOTS, '05-one-idea.png'), fullPage: false });

  // ⑥ Release
  await page.locator('#release').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOTS, '06-release.png'), fullPage: false });

  await browser.close();

  if (errors.length > 0) {
    console.error('Console errors detected:');
    errors.forEach(e => console.error(' -', e));
    process.exit(1);
  }

  console.log('Smoke test passed. Screenshots saved to test-screenshots/');
})();
