const fs = require('fs');
const path = require('path');

// создание папки
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) throw `Не удалось создать папку. ${err}`; // создать исключение(ошибку)
// });

const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'Hello NodeJS',{'flag': 'w'}, (err) => {
//     if(err) throw `Не удалось создать файл. ${err}`;
//     console.log('Файл создан');
// });

fs.appendFile(filePath, '\nHello again', err => {
    if(err) throw `Не удалось добавить в файл. ${err}`;
    console.log('Файл обновлен');
});

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) throw `Не удалось прочитать файл. ${err}`;
    console.log(content);
});