// Готовый тест калькулятора. Не меняй этот файл: проверка проекта сверяет его с шаблоном.
// Запуск из корня репозитория: node test.js — код выхода 0, если все проверки прошли.
const test = require('node:test');
const assert = require('node:assert/strict');
const { add, subtract, multiply } = require('./calc.js');

test('add: 2 + 3 = 5', () => assert.equal(add(2, 3), 5));
test('add: -4 + 10 = 6', () => assert.equal(add(-4, 10), 6));
test('subtract: 2 - 3 = -1', () => assert.equal(subtract(2, 3), -1));
test('subtract: 10 - 4 = 6', () => assert.equal(subtract(10, 4), 6));
test('multiply: 2 * 3 = 6', () => assert.equal(multiply(2, 3), 6));
test('multiply: -2 * 5 = -10', () => assert.equal(multiply(-2, 5), -10));
test('multiply: 7 * 0 = 0', () => assert.equal(multiply(7, 0), 0));
