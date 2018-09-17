console.log('starting notes.js')

var addNote = (title, body)=>{
    console.log('adding node', title,body);
};


/**
 * function for getting all logs
 */
var getAll = () =>{

    console.log('getting all log')
};


/**
 * function for calling getting read
 */
var getNote = (title) =>{
    console.log('getting note',title);
}



/**
 * function for removing methods
 */
var removeNote = (title) =>{
    console.log('removing note',title);
}


module.exports = {
    addNote : addNote,
    getAll : getAll,
    getNote : getNote,
    removeNote : removeNote
}