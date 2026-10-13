// Решения заданий 86–105 (чистый JavaScript, вывод в консоль)
// Запуск: node solutions_86_105.js  или вставить в консоль браузера (F12)

// ───────────── Задание 86. Свободное место на диске ─────────────
console.log("=== Задание 86 ===");
function diskStatus(freeSpace) {
  if (freeSpace < 0) return "Ошибка: отрицательное значение";
  else if (freeSpace < 5) return "Критически мало памяти";
  else if (freeSpace < 20) return "Мало свободного места";
  else if (freeSpace < 100) return "Достаточно места";
  else return "Много свободного места";
}
let freeSpace = 18;
console.log(freeSpace, "ГБ →", diskStatus(freeSpace));
for (const v of [3, 15, 50, 150, -1]) console.log(v, "ГБ →", diskStatus(v));

// ───────────── Задание 87. Уровень пользователя ─────────────
console.log("\n=== Задание 87 ===");
function userLevel(points) {
  if (points < 0) return "Ошибка: отрицательные баллы";
  else if (points <= 99) return "Новичок";
  else if (points <= 299) return "Пользователь";
  else if (points <= 599) return "Продвинутый";
  else return "Эксперт";
}
let points = 350;
console.log(points, "→", userLevel(points));
for (const p of [99, 100, 299, 300, 600]) console.log(p, "→", userLevel(p));

// ───────────── Задание 88. Плата за парковку ─────────────
console.log("\n=== Задание 88 ===");
function parkingFee(hours) {
  if (typeof hours !== "number" || isNaN(hours) || hours <= 0 || hours > 24)
    return "Ошибка: время должно быть больше 0 и не более 24 часов";
  const h = Math.ceil(hours);              // каждый начатый час
  let sum = 300 + (h - 1) * 200;           // первый час 300, остальные по 200
  if (sum > 2000) sum = 2000;              // максимум за сутки
  return sum + " ₸";
}
let hours = 5;
console.log(hours, "ч →", parkingFee(hours));
for (const h of [1, 2.2, 10, 24, 0, 25]) console.log(h, "ч →", parkingFee(h));

// ───────────── Задание 89. Сезон ─────────────
console.log("\n=== Задание 89 ===");
function getSeason(month) {
  switch (month) {
    case 12: case 1: case 2: return "Зима";
    case 3: case 4: case 5: return "Весна";
    case 6: case 7: case 8: return "Лето";
    case 9: case 10: case 11: return "Осень";
    default: return "Ошибка: номер месяца должен быть от 1 до 12";
  }
}
let month = 10;
console.log(month, "→", getSeason(month));
for (const m of [12, 3, 7, 0, 13]) console.log(m, "→", getSeason(m));

// ───────────── Задание 90. Температура сервера ─────────────
console.log("\n=== Задание 90 ===");
function serverState(temperature) {
  if (temperature < 40) return "Нормальная температура";
  else if (temperature < 70) return "Повышенная температура";
  else return "Опасный перегрев";
}
for (const t of [65, 30, 40, 70, 85]) {
  let msg = `${t}°C → ${serverState(t)}`;
  if (t >= 70) msg += " ⚠ ВНИМАНИЕ! Сервер перегревается!";
  console.log(msg);
}

// ───────────── Задание 91. Сумма чисел, кратных 3 ─────────────
console.log("\n=== Задание 91 ===");
let sum91 = 0, count91 = 0;
for (let i = 1; i <= 60; i++) {
  if (i % 3 === 0) { sum91 += i; count91++; }
}
console.log("Сумма:", sum91, "Количество:", count91); // 630 и 20

// ───────────── Задание 92. Вторая по величине оценка ─────────────
console.log("\n=== Задание 92 ===");
let scores92 = [75, 92, 88, 65, 98, 83];
let sorted92 = [...scores92].sort((a, b) => b - a);
console.log("По убыванию:", sorted92);
console.log("Второй по величине балл:", sorted92[1]);
// Дополнительно: максимум повторяется — берём второе уникальное значение
let withDup = [98, 98, 92, 88, 75];
let unique = [...new Set(withDup)].sort((a, b) => b - a);
console.log("Массив с повтором:", withDup);
console.log("Второе уникальное значение:", unique.length > 1 ? unique[1] : "нет второго значения");

// ───────────── Задание 93. Количество букв "a" ─────────────
console.log("\n=== Задание 93 ===");
let text = "javascript programming";
let count93 = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === "a") count93++;
}
console.log('Буква "a" встречается', count93, "раз(а)");

// ───────────── Задание 94. Товары дороже 10 000 ₸ ─────────────
console.log("\n=== Задание 94 ===");
let prices = [5000, 12000, 8000, 25000, 17000, 3000];
let expensive = prices.filter(p => p > 10000);
let total94 = 0;
for (const p of expensive) total94 += p;
console.log("Дороже 10 000 ₸:", expensive);
console.log("Количество:", expensive.length);
console.log("Общая стоимость:", total94.toLocaleString("ru-RU"), "₸");

// ───────────── Задание 95. Квадраты от 1 до 15 ─────────────
console.log("\n=== Задание 95 ===");
let squares = [];
for (let i = 1; i <= 15; i++) squares.push(i * i);
console.log(squares);

// ───────────── Задание 96. Анализ оценок группы ─────────────
console.log("\n=== Задание 96 ===");
let grades = [95, 78, 45, 88, 67, 92, 35, 74, 81, 50];
let sum96 = 0, high = 0, low = 0, max96 = grades[0], min96 = grades[0];
for (const g of grades) {
  sum96 += g;
  if (g >= 90) high++;
  if (g < 50) low++;
  if (g > max96) max96 = g;
  if (g < min96) min96 = g;
}
console.log("Средний балл:", sum96 / grades.length);
console.log("Результатов от 90:", high);
console.log("Результатов ниже 50:", low);
console.log("Максимум:", max96, "| Минимум:", min96);

// ───────────── Задание 97. Удаление отрицательных чисел ─────────────
console.log("\n=== Задание 97 ===");
let numbers = [-4, 8, -12, 15, 0, 22, -3, 9];
let nonNegative = numbers.filter(n => n >= 0);
console.log("Исходный массив:", numbers);
console.log("Без отрицательных:", nonNegative);
console.log("Исключено элементов:", numbers.length - nonNegative.length);

// ───────────── Задание 98. Степени двойки ─────────────
console.log("\n=== Задание 98 ===");
for (let i = 0; i <= 10; i++) console.log(`2^${i} = ${2 ** i}`);

// ───────────── Задание 99. Расчёт НДС ─────────────
console.log("\n=== Задание 99 ===");
function calculateTax(price, taxRate) {
  if (typeof price !== "number" || typeof taxRate !== "number" ||
      isNaN(price) || isNaN(taxRate) || price < 0 || taxRate < 0) return null;
  return price * taxRate / 100;
}
let price = 100000, taxRate = 12;
const tax = calculateTax(price, taxRate);
if (tax === null) {
  console.log("Ошибка: некорректные данные");
} else {
  console.log("Сумма налога:", tax.toLocaleString("ru-RU"), "₸");
  console.log("Цена с налогом:", (price + tax).toLocaleString("ru-RU"), "₸");
}
console.log("Проверка ошибки:", calculateTax(-5, 12));

// ───────────── Задание 100. Конвертер времени ─────────────
console.log("\n=== Задание 100 ===");
function convertTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return { hours: h, minutes: m, seconds: s };
}
let totalSeconds = 3675;
const t = convertTime(totalSeconds);
console.log(`${t.hours} ч ${t.minutes} мин ${t.seconds} сек`);

// ───────────── Задание 101. Каталог телефонов ─────────────
console.log("\n=== Задание 101 ===");
let phones = [
  { name: "Samsung", price: 280000, stock: 5 },
  { name: "Xiaomi", price: 160000, stock: 12 },
  { name: "Apple", price: 520000, stock: 3 },
  { name: "Honor", price: 190000, stock: 8 },
];
console.log("Каталог:");
for (const p of phones)
  console.log(` ${p.name}: ${p.price.toLocaleString("ru-RU")} ₸, на складе: ${p.stock}`);
let priciest = phones[0];
let totalPhones = 0, totalValue = 0;
for (const p of phones) {
  if (p.price > priciest.price) priciest = p;
  totalPhones += p.stock;
  totalValue += p.price * p.stock;
}
console.log("Самый дорогой:", priciest.name);
console.log("Дешевле 200 000 ₸:", phones.filter(p => p.price < 200000).map(p => p.name));
console.log("Всего телефонов:", totalPhones);
console.log("Стоимость всех на складе:", totalValue.toLocaleString("ru-RU"), "₸");

// ───────────── Задание 102. Статистика успеваемости ─────────────
console.log("\n=== Задание 102 ===");
function analyzeScores(scores) {
  let sum = 0, passed = 0;
  for (const s of scores) {
    sum += s;
    if (s >= 50) passed++;
  }
  return {
    average: sum / scores.length,
    passed: passed,
    failed: scores.length - passed,
    successRate: (passed / scores.length) * 100,
  };
}
console.log(analyzeScores([78, 95, 43, 67, 88, 50, 91, 30]));

// ───────────── Задание 103. Генератор идентификаторов ─────────────
console.log("\n=== Задание 103 ===");
let idCounter = 0;
function generateStudentId() {
  idCounter++;
  return "ST-" + String(idCounter).padStart(4, "0");
}
for (let i = 0; i < 5; i++) console.log(generateStudentId());

// ───────────── Задание 104. Сложность пароля ─────────────
console.log("\n=== Задание 104 ===");
function checkPasswordStrength(password) {
  if (password.length < 8) return "Слабый";
  const hasLetter = /[A-Za-zА-Яа-яЁё]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[^A-Za-zА-Яа-яЁё0-9]/.test(password);
  if (hasLetter && hasDigit && hasSpecial) return "Сложный";
  if (hasLetter && hasDigit) return "Хороший";
  if (hasLetter) return "Средний";   // только буквы (или буквы + спецсимволы)
  return "Слабый";                   // нет букв — условия задания не выполнены
}
for (const pw of ["abc123", "password", "password1", "Pass123!", "12345678"])
  console.log(`${pw} → ${checkPasswordStrength(pw)}`);

// ───────────── Задание 105. Учёт библиотечных книг ─────────────
console.log("\n=== Задание 105 ===");
let books = [
  { id: 1, title: "JavaScript", copies: 5 },
  { id: 2, title: "Python", copies: 3 },
  { id: 3, title: "HTML", copies: 7 },
  { id: 4, title: "SQL", copies: 2 },
];
function findBook(id) {
  return books.find(b => b.id === id);
}
function issueBook(id) {
  const book = findBook(id);
  if (!book) return console.log("Книга не найдена");
  if (book.copies === 0) return console.log(`⚠ Нет свободных экземпляров книги «${book.title}»`);
  book.copies--;
  console.log(`Выдана книга «${book.title}». Осталось: ${book.copies}`);
}
function returnBook(id) {
  const book = findBook(id);
  if (!book) return console.log("Книга не найдена");
  book.copies++;
  console.log(`Возвращена книга «${book.title}». Теперь экземпляров: ${book.copies}`);
}
issueBook(4);
issueBook(4);
issueBook(4);   // предупреждение
returnBook(4);
issueBook(99);  // не найдена
console.log("Обновлённый каталог:");
console.table(books);