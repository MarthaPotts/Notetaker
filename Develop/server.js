//dependencies
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

//data db.json id/title/text

//Routes 

//GET /api/notes should receive a new note to save on req.body, add it to db.json, then return new note to client
//give each note a unique id -> npm uuid -> devDependency
//add DELETE route
//DELETE /api/notes/:id, should receive query parameter containing id of note to delete; in order 
//to delete the note, read all the notes from db.json, remove note with  given id prop, then rewrite notes to db.json
//app.get('/', (req, res) => res.send('IT IS ALIVE!!!'));//correct this to context//this should be *, => index.html

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html')); 
}); 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html')); 
});
 
/*app.post('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.error(err)
        }
        data.push(req.body); 
        fs.writeFile('db/db.json', data, () => {
        res.end(); 
    });
});
}); */

app.post('/api/notes', (req, res) =>{
    const newNote = req.body; 
    console.log(newNote); 
    newNote.routeName = newNote.title.replace(/\s+/g, '');
    newNote.id = uuidv4();
    dbNotes.push(newNote); 

    fs.writeFile('./db/db.json', JSON.stringify(dbNotes), (err) => {
        if(err) throw err; 
    }); 
    res.json(newNote); 
})
/*app.get('/api/notes/:note', (req, res) => {
    const searched = req.params.note; 
    console.log(searched); 
})*/
/*app.delete(`/api/notes/${id}`, (req, res) => {
    //read and rewrite?
    fs.readFile('/db/db.json', 'utf8', (err, data) =>{
        if (err) { 
            console.error(err)
            return 
    }
    //?receive query param w/ `${id}` ->? data
    //does json add to the beginning or the end? ?if `${id}` used =data
        //out of an array -> pop(), shift(), slice()/join(), remove()?
        //take the ${id} out of the array, make new data array 
        //rewrite file
        data.push(req.body);
        fs.writeFile('db/db.json', data, () => {
            res.end(); 
        })
    
});*/

//start/Listener
app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`Server is running on: ${PORT}`);
})
console.log(dbNotes); 