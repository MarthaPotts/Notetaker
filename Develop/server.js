//dependencies
const { SSL_OP_SINGLE_DH_USE } = require('constants');
const express = require('express'); 
const fs = require('fs');
const path = require('path'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 

//to handle data parsing 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

//data db.json id/title/text

//Routes
app.get('/', (req, res) => res.send('Helooo!'));//correct this to context

app.post('/api/notes', (req, res) => {
    fs.readFile('/db/db.json', 'utf8', (err, data) => {
        data.push(req.body); 
        fs.writeFile('/db/db.json', data, ()=>{
        res.end(); 
    })
})
//start/Listener
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`); 
}); 
