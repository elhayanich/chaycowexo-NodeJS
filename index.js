const cowsay = require('cowsay'); 
const info = require('./information'); 
console.log(cowsay.say({ text: 'Heeey my name is' + info.nom + ' learning in ' + info.campus }));