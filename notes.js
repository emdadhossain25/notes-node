console.log('starting notes.js')

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title: title,
        body: body
    }

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {

        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }


};


/**
 * function for getting all logs
 */
var getAll = () => {

    console.log('getting all log')
};


/**
 * function for calling getting read
 */
var getNote = (title) => {
    console.log('getting note', title);
}


/**
 * function for removing methods
 */
var removeNote = (title) => {
    console.log('removing note', title);
}


module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
}