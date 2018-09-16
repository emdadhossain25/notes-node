console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var sum = notes.add(6,4);
console.log(sum);

console.log(_.isString(true));
console.log(_.isString('emdad'));


var user = os.userInfo();



console.log(user);
fs.appendFile('greetings.txt',`Hello ${user.username}! `,function (err) {
    if (err)
        console.log('unable to write to file!');
});