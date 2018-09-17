console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');


const notes = require('./notes.js');


const yargs = require('yargs');
const argv = yargs.argv;



// argv= arguments vector
console.log(process.argv);

// argument from yargs
console.log(argv);


console.log(_.isString(true));
console.log(_.isString('emdad'));


var filteredArray = _.uniq(['emdad', 1, 'emdad', 1, 2, 3, 4, 5])
console.log(filteredArray);


// calling node app.js list for checking the command line
var command = argv._[0];
console.log('Command', command);

/**
 * checking the full command for
 */
console.log(process)



/*** TODO - node app.js list
 * control flow for command in -> node app.js add => prints: adding new note
 * control flow for command in -> node app.js list  => prints : listing all notes
 * else prints -> command not recognized
 */
if (command == 'add') {

    var note = notes.addNote(argv.title, argv.body);

    if (note === undefined){
        console.log('no note was added in the notes file');
    }else {

        console.log('note was added in the notes file');
        console.log('-----');
        console.log(`Title: ${note.title}`);
        console.log(`body: ${note.body}`);
    }

} else if (command == 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
}
else if (command === 'remove'){
    notes.removeNote(argv.title);
}

else {
    console.log('command not recongnized')
}