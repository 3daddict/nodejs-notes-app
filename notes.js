const fs = require('fs');

const getNotes = () => {
    return 'Your notes...'
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        //Add title and body to existing note list
    notes.push({
        title: title,
        body: body
    })
        saveNotes(notes);
        console.log('New note added sucessfully');
    } else {
        console.log('Note title already taken!');
    }

    
}

//Function to take in notes array and save to new file with updated data
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
    
}

module.exports = {
    getNotes,
    addNote
};