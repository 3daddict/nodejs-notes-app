const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Title: ' + argv.title);
        // console.log('Body: ' + argv.body);
        notes.addNote(argv.title, argv.body);
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


yargs.parse();
//console.log(yargs.argv);