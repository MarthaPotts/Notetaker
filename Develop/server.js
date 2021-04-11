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

//data 

//Routes 

//The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

//`GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, 
//and then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

// `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
//and then rewrite the notes to the `db.json` file.

// HTML routes: 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html')); 
}); 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html')); 
});
//API routes: 

//GET /api/notes => readFile(db.json) => all saved notes as JSON:

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
//POST /api/notes => receive newNote to save on req.body, add to db.json file appendFile(), or writeFile(), .then()=>newNote to client
//const dbNotes = {};
app.post('/api/notes', (req, res) =>{
    const newNote = req.body; 
    console.log(newNote); 
    //newNote.routeName = newNote.title.replace(/\s+/g, '');//this is replacing the note, not adding to an object. 
    newNote.id = uuidv4();
    //dbNotes.push(newNote); 
    //add note to db.json
    fs.appendFile('./db/db.json', JSON.stringify(newNote), (err) => {
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