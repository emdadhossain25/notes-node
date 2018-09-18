console.log('starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {

        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {

        notes.push(note);
        saveNotes(notes);
        return note;
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
    var note = fetchNotes();
    var readNotes = note.filter((note) => note.title === title);
        return readNotes[0]

}


var logNote = (note) =>{
    //adding a debugger for testing repl
    console.log('----------');
    console.log(`Title: ${note.title} Body: ${note.body}`);
}

/**
 * function for removing methods
 */
var removeNote = (title) => {
    //fetch the notes
    var fetched_notes = fetchNotes();
    //filter notes, removing the one with title of  argument or saving the others from existing file
    var filteredNotes = fetched_notes.filter((note) => note.title !==title);
    // save new notes array
    saveNotes(filteredNotes);

    // returs true or false to print message a note was removed or note
    return fetched_notes.length!==filteredNotes.length
}


module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
    logNote:logNote
}