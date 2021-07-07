//dependencies
const express = require('express');
const fs = require('fs'); 
const path = require('path'); 
const {v4 : uuidv4 } = require('uuid'); 

//set up
const app = express(); 
const PORT = process.env.PORT || 3000; 

//data
//./db/db.json
const db = './db/db.json'; 
//parsing 
app.use(express.urlencoded( { extended : true })); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));

//routes
//HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html')); 
}); 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/publicnotes.html')); 
})

//API
//GET all notes from db.json
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if(err) console.log(`error reading file: ${err}`); 
     })
    const getNote = res.json(data)
    const notes = JSON.parse(getNote); 
    console.log(notes); 
})
//GET specified note from db.json
// app.get('/api/notes/:note', (req, res) => {
//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//         if(err) console.log(`error reading file : ${err}`); 
//     })
//     const note = req.params.note; 
//     console.log(note);
// })
//POST note to db.json
// app.post('/api/notes', (req, res) => {

// })
// //DELETE note from db.json
// app.delete('/api/notes/', (req, res) => {

// })

//start
app.listen(PORT, (err) => {
    if(err) console.log(err); 
    console.log(`Server is running on : ${PORT}`); 
}); 