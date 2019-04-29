const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!');
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Note has been removed!');
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function (){
        console.log('Here is the list of notes!');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read Note',
    handler: function (){
        console.log('Reading note!');
    }
});

console.log(yargs.argv)