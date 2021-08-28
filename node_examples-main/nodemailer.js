const fs = require('fs');
const nodemailer = require('nodemailer')
const lp=require('./lp');

async function sendMail(subject, textMail, ...recipients) {
    let transporter = nodemailer.createTransport({
        //host: 'smtp.gmail.com',
        //host: 'smtp.yandex.ru',
        //port: 465,
        //secure: true,
        service:'gmail',
        auth: {
            user: lp.login,
            pass: lp.password,
        },
    })

    fs.readFile("./picture.jpg", function (err, data) {
        if(err) {
            console.log('Ошибка!');
        } else {
            let mailDetails = {
                from: lp.login,
                to: recipients,
                subject: subject,
                html: "<h2>"+textMail+"</h2>",
                attachments: [{'filename': 'picture.jpg', 'content': data}]
            };
            transporter.sendMail(mailDetails, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('Сообщение отправлено');
                }
            });
        }
    });
}

sendMail(
    'Письмо с файлом',
    '«Почта России» и Internet Explorer. Созданы друг для друга.',
    'recipient_1@yandex.ru',
    'recipient_2@gmail.com',
    'recipient_3@ngs.ru').catch(console.error);
