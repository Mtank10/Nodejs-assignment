
const request = require('request');
const Tesseract = require('tesseract.js');


const captchaUrl = 'https://i.ibb.co/jTKYQqP/Captcha-United.png';


request.get({url: captchaUrl, encoding: null}, (err, response, body) => {
  if (err) {
    console.error('Failed to download captcha image:', err);
    return;
  }

  Tesseract.recognize(body)
    .then(({data: {text}}) => {
      console.log('The captcha text is:', text.trim());
    })
    .catch((err) => {
      console.error('Failed to recognize captcha image:', err);
    });
});



