console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');


const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);



console.log(_.isString(true));
console.log(_.isString('emdad'));





var filteredArray = _.uniq(['emdad',1,'emdad',1,2,3,4,5])
console.log(filteredArray);

