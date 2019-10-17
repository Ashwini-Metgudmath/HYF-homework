// app for note taking
const notes = [];
function addNote(id, content){
    if(typeof(id)=="number" && typeof(content)=="string"){
        notes.push({id, content});
        return "Added note";
    }
    else{
        return "Please enter valid id of type number and content of type string";
    }

}

function getNoteFromId(id){
    if(typeof(id) === "number" && id != ""){
        for(let i=0; i<notes.length; i++){
            if(notes[i].id == id){
                return notes[i];
            }
       }
    }
    else{
        return "Enter valid Id of type number";
    }

}


function logOutNotesFormatted(){
    const logOutNotes = [];
    for(let i=0; i<notes.length; i++){
        logOutNotes.push(`This note with Id: ${notes[i].id}, has the following note text:${notes[i].content} `);
    }
    return logOutNotes;
}

console.log(addNote(1, "Sample note"));
console.log(addNote("3","Hello"));
console.log(addNote(2, "Link for Javascript practice"));
console.log(getNoteFromId(1));
console.log(logOutNotesFormatted());