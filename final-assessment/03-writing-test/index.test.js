import { test, strictEqual } from 'node:assert';
import { sum } from './index.js';

test('Fungsi sum harus mengembalikan jumlah dari dua angka', () => {
  strictEqual(sum(2, 3), 5);
  strictEqual(sum(-1, 1), 0);
  strictEqual(sum(0, 0), 0);
});