// Screenshot an HTML file: node tools/shot.js <in.html> <out.png> [width] [scale]
const { chromium } = require('playwright');
(async () => {
  const [, , inp, out, w = '1400', s = '1'] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: 800 }, deviceScaleFactor: +s });
  await p.goto('file://' + require('path').resolve(inp));
  await p.screenshot({ path: out, fullPage: true });
  await b.close();
})();
