const path = require('path');
console.log(`Название файла: ${path.basename(__filename)}`);
console.log(`Имя директории: ${path.dirname(__filename)}`);
console.log(`Расширение файла: ${path.extname(__filename)}`);
console.log(`Полная инфа о файле: ${path.parse(__filename)}`);
console.log(`Полная инфа о файле: ${path.parse(__filename).name}`);
console.log(`Объединение: ${path.join(__dirname, 'server', 'index.html')}`);

