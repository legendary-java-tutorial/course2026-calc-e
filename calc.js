// Функции калькулятора. Их ждёт test.js — имена не меняй.
// Пока это заглушки: каждая сообщает, что ещё не написана.

function add(a, b) {
  throw new Error('add: ещё не написана');
}

function subtract(a, b) {
  throw new Error('subtract: ещё не написана');
}

function multiply(a, b) {
  throw new Error('multiply: ещё не написана');
}

// Для node test.js: тест берёт функции через require.
// В браузере module нет — там функции видны странице как обычные.
if (typeof module !== 'undefined') {
  module.exports = { add, subtract, multiply };
}
