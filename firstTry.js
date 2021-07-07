//dependencies
const { notStrictEqual } = require('assert');
const { SSL_OP_SINGLE_DH_USE } = require('constants');//VSC put this here. I have no clue. 

const express = require('express'); 
const fs = require('fs');
const path = require('path'); 
const {v4 : uuidv4} = require('uuid');

//set up the app
const app = express(); 
const PORT = process.env.PORT || 3000; 

//to handle data parsing 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));

//data fs/db.json

//Routes

// HTML routes: 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html')); 
}); 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html')); 
});
//API routes: 

//GET /api/notes => readFile(db.json) => all saved notes as JSON:
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8',(err, data) => {
        if(err) throw err; 
    })
    res.json(data); 
    }); 
app.get('/api/notes/:note', (req, res) => {
    const singleNote = req.params.note; 
    for (let i = 0; i > notes.length; i++) {
        if(note === notes[i].routeName) {
            return res.json(notes[i])
        }
    }
    return res.json(false); 
}); 

app.post('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.error(err)
        }
        data.push(req.body); 
        fs.writeFile('./db/db.json', data, () => {
        res.end(); 
    });
});
}); 
// //POST /api/notes => receive newNote to save on req.body, add to db.json file appendFile(), or writeFile(), .then()=>newNote to client

// //const dbNotes; 'undefined', stops script
app.post('/api/notes', (req, res) => {
    const newNote = req.body; 
    console.log(newNote); 
    //newNote.routeName = newNote.title.replace(/\s+/g, '');//this is replacing the note, not adding to an object/array. 
    newNote.id = uuidv4();
    //dbNotes.push(newNote); 
    //add note to db.json
    // fs.appendFile('./db/db.json', JSON.stringify(newNote),(err) => {
    //     if(err) throw err; 
    // }); 
    // res.json(newNote); 
    const data = JSON.stringify(newNote, null, 4)

    fs.readFile('./db/db.json', 'utf8', (err, data) =>{
        if (err) {
            console.log(`error reading file : ${err}`)
        }
        else {
            const dbNotes = JSON.parse(data); 
            dbNotes.push(data); 
        }
      
    fs.writeFile('./db/db.json', JSON.stringify(dbNotes, null, 4), (err) => {
        if (err) {
            throw err; 
        }
        console.log(err); 
        })
})}

// // `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. 
// //In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
// //and then rewrite the notes to the `db.json` file.

// // app.delete('/api/note/:note', (req, res) => {
// //     fs.readFile('./db/db.json', 'utf8', (err, data) => {
// //         //req.params.note?
// //         //remove note that has this id (if object contains this id, delete object) array.remove()
// //         const chosen = `${note.id}`; 
// //        if()
        
// //     })
// // })
// // function getId(id){ 
// //     return notes.id; 
// // }
// // for(let n = 0; n < notes.length; i++) {
// //     if(notes[i], ///)
// // }
// /*app.delete(`/api/notes/${id}`, (req, res) => {
//     //read and rewrite?
//     fs.readFile('/db/db.json', 'utf8', (err, data) =>{
//         if (err) { 
//             console.error(err)
//             return 
//     }
//     //?receive query param w/ `${id}` ->? data
//     //does json add to the beginning or the end? ?if `${id}` used =data
//         //out of an array -> pop(), shift(), slice()/join(), remove()?
//         //take the ${id} out of the array, make new data array 
//         //rewrite file
//         data.push(req.body);
//         fs.writeFile('db/db.json', data, () => {
//             res.end(); 
//         })
    
// });*/

// //start/Listener
,app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`Server is running on: ${PORT}`);
})); 