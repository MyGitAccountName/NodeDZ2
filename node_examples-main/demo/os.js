const os = require('os');

console.log(`Операционная система: ${os.platform()}`);
console.log(`Архитектура процесора: ${os.arch()}`);
console.log(`Инфа по процессорам: ${os.cpus().model}`);
console.log(`Всего памяти : ${os.totalmem()}`);
console.log(`Свободная память : ${os.freemem()}`);
console.log(`Сколько времени включена система : ${os.uptime() }`);


