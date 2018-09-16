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


// argv= arguments vector
console.log(process.argv);

// calling node app.js list for checking the command line
var command = process.argv[2];
console.log('Command',command);


/*** TODO - node app.js list
 * control flow for command in -> node app.js add => prints: adding new note
 * control flow for command in -> node app.js list  => prints : listing all notes
 * else prints -> command not recognized
 */
if( command == 'add'){
    console.log('adding new note')
}else if (command == 'list'){
    console.log('listing all notes')
}else {
    console.log('command not recongnized')
}