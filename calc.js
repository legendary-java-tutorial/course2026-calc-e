// Функции калькулятора. Их ждёт test.js — имена не меняй.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Для node test.js: тест берёт функции через require.
// В браузере module нет — там функции видны странице как обычные.
if (typeof module !== 'undefined') {
  module.exports = { add, subtract, multiply, divide };
}
