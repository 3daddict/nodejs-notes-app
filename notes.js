const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
    return 'Your notes...'
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

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

const removeNote = (title) => {
    const notes = loadNotes();
    //filter list of notes to keep
    const notesToKeep = notes.filter((note) => note.title > title);

    if(notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note sucessfully removed'));
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

//Function to take in notes array and save to new file with updated data
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
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
    addNote,
    removeNote
};