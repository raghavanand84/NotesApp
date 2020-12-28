const fs = require('fs');
const validator = require('validator');

class Note {
    constructor(){
        this.Notes = JSON.parse(fs.readFileSync('./note.json').toString());
    }    

    getNotes() {
        return this.Notes;
    }

    addNote(title, body){          
        
        if(validator.isEmpty(title) || validator.isEmpty(title) ){
            console.log("title or body cant be empty");
        }
        else{  
            let note = this.Notes.find((note) => Object.keys(note)[0] === title);
            
            if(!note){
                let note = {};
                note[title] = body;
                console.log('adding note');
                this.Notes.push(note);
                fs.writeFileSync('./note.json',JSON.stringify(this.Notes));
            }
            else{
                console.log('the title already exists');
            }
        }
    }

    removeNote(title){
        if(this.Notes.filter((note) => Object.keys(note)[0] === title).length > 0){
            console.log('remove note');
            this.Notes = this.Notes.filter((note) => Object.keys(note)[0] !== title);
            fs.writeFileSync('./note.json',JSON.stringify(this.Notes));
        }
    }

    readNote(title){
        console.log('read note');
        const note = this.Notes.filter( (note) =>Object.keys(note)[0] === title)[0];
        console.log(note[title]);
    }
}

module.exports = Note;

