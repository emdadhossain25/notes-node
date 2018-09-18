console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

var titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
}

var bodyOptions = {
    describe: 'Body of Note',
    demand: true,
    alias: 'b'
}
const notes = require('./notes.js');


const yargs = require('yargs');
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })


    .command('list', 'list all the notes ')

    .command('remove', 'remove a note', {
        title: titleOptions

    })

    .command('read', 'read a note', {
        title: titleOptions

    })
    .help()
    .argv;


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

    if (note !== undefined) {

        notes.logNote(note);
    } else
        console.log("No note was added")

} else if (command == 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => {
        console.log('title ' + note.title + ' body ' + note.body);
    })

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    var noteRead = note ? ('title :' + note.title + '\n' + 'Body : ' + note.body) : 'Not Not Found';
    console.log(noteRead)

}
else if (command === 'remove') {
    var note = notes.removeNote(argv.title);

    var message = note ? 'Note was removed' : 'Not not found';
    console.log(message)
}

else {
    console.log('command not recongnized')
}