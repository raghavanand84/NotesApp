const note = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

let myNotes = new note();
yargs.command({
    command: 'add',
    describe:'add a note',
    builder: {
        title : {
            describe : 'Title of the note',
            type: 'string',
            demandOption : true
        },
        body : {
            describe : 'Body of the note',
            type: 'string',
            demandOption : true
        }
    } ,
    handler(argv){myNotes.addNote(argv.title, argv.body)}  
});

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder : {
        title : {
            describe : 'note title', 
            demandOption : true, 
            type : 'string'
        }
    },
    handler(argv){myNotes.removeNote(yargs.argv.title)}
    
});

yargs.command({
    command:'read',
    describe:'read a note',
    handler(argv){myNotes.readNote(yargs.argv.title)}    
});

yargs.command({
    command:'list',
    describe:'list all notes',
    handler(){console.log(JSON.stringify(myNotes.getNotes()));}
});

yargs.parse();


// if(command === 'add'){
//     console.log('adding');
// } else if(command === 'remove'){
//     console.log('removing');
// }
