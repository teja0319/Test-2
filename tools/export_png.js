// Export every SVG in logo/svg to PNG with headless Chromium (Playwright).
// Usage: node tools/export_png.js
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const SRC = path.join(__dirname, '..', 'logo', 'svg');
const OUT = path.join(__dirname, '..', 'logo', 'png');
const sizes = { // file -> list of output widths (px)
  'megnetora-app-icon.svg': [1024, 512, 192],
  'megnetora-favicon.svg': [180, 64, 32],
  'megnetora-icon.svg': [1024, 512],
  'megnetora-icon-dark.svg': [1024, 512],
};
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const file of fs.readdirSync(SRC).filter(f => f.endsWith('.svg'))) {
    const svg = fs.readFileSync(path.join(SRC, file), 'utf8');
    const [, w, h] = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).map(Number);
    for (const width of sizes[file] || [Math.round(w * 2)]) {
      const height = Math.round(width * h / w);
      await page.setViewportSize({ width, height });
      const sized = svg.replace(/width="[\d.]+" height="[\d.]+"/, `width="${width}" height="${height}"`);
      await page.setContent(`<html><body style="margin:0;background:transparent">${sized}</body></html>`);
      const name = file.replace('.svg', sizes[file] ? `-${width}.png` : '.png');
      await page.screenshot({ path: path.join(OUT, name), omitBackground: true, clip: { x: 0, y: 0, width, height } });
      console.log('wrote', name);
    }
  }
  await browser.close();
})();
