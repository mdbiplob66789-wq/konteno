const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>\s*([\s\S]*?)<\/script>\s*<\/body>/)[1];
const sandbox = {
  module: { exports: {} },
  Intl,
  document: {
    getElementById: () => ({
      value: '',
      style: { setProperty() {} },
      addEventListener() {},
      classList: { add() {}, remove() {} }
    }),
    addEventListener() {}
  },
  clearTimeout() {},
  setTimeout() {}
};
vm.runInNewContext(script, sandbox);
const { HOME_TARIFFS, HOME_ENERGY_CONFIG, formatEnergy, homeQuote } = sandbox.module.exports;

assert.deepStrictEqual(Array.from(HOME_TARIFFS, tariff => [tariff.name, tariff.price, tariff.monthlyEnergy]), [
  ['Start', 990, 8000], ['Creator', 2490, 25000], ['Pro', 4990, 60000], ['Studio', 9990, 150000]
]);
assert.strictEqual(HOME_TARIFFS.filter(tariff => tariff.recommended).length, 1);
assert.strictEqual(HOME_TARIFFS.find(tariff => tariff.recommended).name, 'Creator');
assert.strictEqual(HOME_ENERGY_CONFIG.energyPerRub, 10);
assert.strictEqual(formatEnergy(38000), '38 000 ⚡');
assert.deepStrictEqual({ ...homeQuote(499) }, { rub: 499, bonusPercent: 0, baseEnergy: 4990, bonusEnergy: 0, finalEnergy: 4990 });
assert.deepStrictEqual({ ...homeQuote(500) }, { rub: 500, bonusPercent: 5, baseEnergy: 5000, bonusEnergy: 250, finalEnergy: 5250 });
assert.deepStrictEqual({ ...homeQuote(1000) }, { rub: 1000, bonusPercent: 10, baseEnergy: 10000, bonusEnergy: 1000, finalEnergy: 11000 });
assert.deepStrictEqual({ ...homeQuote(2500) }, { rub: 2500, bonusPercent: 15, baseEnergy: 25000, bonusEnergy: 3750, finalEnergy: 28750 });
assert.deepStrictEqual({ ...homeQuote(5000) }, { rub: 5000, bonusPercent: 20, baseEnergy: 50000, bonusEnergy: 10000, finalEnergy: 60000 });
assert(!/⚡\s*\d/.test(html), 'Lightning must never precede a number');
assert(!/>[^<]*(?:\bT\b|tokens?|токен(?:ы|ов)?)[^<]*</iu.test(html), 'Legacy currency must not be visible');
assert(html.includes('codex-references/approved-visuals/HOME_FINAL.webp'), 'Approved previews must use exact reference crops');
assert(!html.includes('Что можно сделать в KONTENO'), 'Removed section must not return');
assert(html.includes('KONTENO —</span><br>твой личный'), 'Approved hero copy must exist');
assert(html.includes('type="range"') && html.includes('type="number"'), 'Top-up input and continuous slider must exist');

console.log('KONTENO HOME_FINAL tests passed');
