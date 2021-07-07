//require
const http = require('http'); 
//define port
const PORT = 8080; 
//request and response handling
/*const handleRequest = (request, response) => {
    response.end()*/
}
//create server
const server = http.createServer(handleRequest); 
//start server
server.listen(PORT, () => {
    console.log(`Server listening on : ${PORT}`); 
}); 
//function to run when visiting the index path //this should require?
/*const displayIndex = (res) => {
    //this might be a fs thing
    //maybe this one is better: 
const displayRoot = (res) => {
    //grab the index, default display: http://localhost: 8080/; 
}
//configure ok response
    res.writeHead(200, { 'Content-Type': 'text/html'}); //adapt this prn
//end response by sending
    res.end(); 
}; 
//path undefined, display 404
const display404 = (url, res) => {
    <html>
        <body>
            <h1>404 Not Found</h1>
            <p>The page you were looking for : ${url} cannot be found</p>
        </body>
    </html>; 
//configure response to return 404 and render as HTML document
    res.writeHead(404, {'Content-Type': 'text/html'}); 
//end response
    res.end(myHTML); //display404? //displayRoot/Index?
}*/
//function to handle incoming incoming requests and responses: 
//const handleRequest = (req, res) => {
    const path = req.url; 
    //depending on url display html file 
    switch (path) {
        case '/': 
          return displayRoot(res); 
        case '/index.html' //adjust this prn
          return displayPortfolio(res); //adjust for notes, write function to render that page
        default: 
          return display404(path, res); 
    }
}; 
//order in portfolio example: require, PORT, displayPortfolio, configure 200, displayRoot, configure 200, 
//configure 404, function to handle request/response with switch, assign/createServer, start Listener, 
//serving html 
//dependencies
const http = require('http'); 
const fs = require('fs'); 
//set PORT
const PORT =8080; 
//req,res handling
const handleRequest = (req, res) => {
    //use fs to read HTML file
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if(err) throw err; 
        //respond to client
        res.writeHead(200, { 'Content-Type': 'text/html'}); 
        res.end(data); 
    }); 
}; 
//create server 
const server = http.createServer(handleRequest); 
//start server
server.listen(PORT, () => {
    console.log(`Server is listening on : ${PORT}`); 
}); 
//request methods order: dependencies, port, request handler that saves the data: 
const handleRequest = (req, res) =>{
    //save data as variable
    let requestData = ''; 
    //when server receives data
    req.on('data', (data0 => {
        //add it to request data
        requestData += data; 
    })
    ); 
    //when request has ended
    req.on('end', () => {
        //log request method and data received //is this where it goes to db?
        console.log(`you did a ${req.method}, with the data: \n, ${request.Data}`); 
        res.end(); 
    }); 
}; 
//then create the server, start the server
//function from POST methods activity: 
const renderWelcomePage = (req, res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if(err) {
            res.writeHead(500, { 'Content-Type': 'text/html' }); 
            res.end(
                '<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></body></html>'
            );
        } else {
            //respond to client by specifically telling browser we are delivering an html file
            res.writeHead(200, { 'Content-Type': 'text/html'}); 
            res.end(data); 
        }
    }); 
}; 
//thank you page
const renderThankYouPage = (req, res) => {
    //save request posted data as variable
    let requestData = ''; 
    let myHTML = "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</body></html>"; 
//when server receives data, it will add it to requestData
    req.on('data', (data) => {
        console.log('You just posted some data to the server: \n', requestData); 
        myHTML = `<html><head><title>Hello Noder!</title></head><body><h1>Thank you for the data: </h1><code>${requestData}</code></body></html>`; 
    });  
//when request ended
req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/html'}); 
    res.end(myHTML); 
}); 
};
const handleRequest = req.url; 

switch (path) {
    case '/thanks':
        return renderThankYouPage(req, res); 
    default: 
    return renderWelcomePage(req, res); 
}; 
//create server, start server/listener
//gleaned from StarWars, the making of: 
//we added express as a dependency,  
const express = require('express'); 
const app = express(); 
const PORT = 3000; 
// we added our data (characters as objects)
//we set up routes, express routes
app.get('/', (req, res) => {
    res.send('Welcome this page')
});
app.get('/yoda', (req, res) => {
    res.json(yoda); 
}); 
//did this for each our characters
//created listener: 
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
}); 
//our data became const characters in an array of objects with their properties, each now given 
//routeName
//we added to Routes after Welcome to this page, 
app.get('/character', (req, res) => {
    const chosen = req.params.character; 
    console.log(chosen); 
    res.end(); 
}); 
//our listener
//then we added, after the Welcome page, //displays all
app.get('/api/characters', (req, res) => {
    return res.json(characters);
}); 
//displays specific value or none found
app.get('/api/characters/:character', (req, res) => {
    //grab the selected parameter
    const chosen = req.params.character; 
    console.log(chosen); 
    //check each routeName for a match to chosen
    for (let i =0;  i < characters.length; i++) {
        const currentChar = characters[i];
        //if the statement is true send it back as JSON 
        if(chosen === currentChar.routeName) {
            return res.json(currentChar); 
        }
    } 
    return res.send('No character found'); 
    //return res.json(false); //otherwise send back as false
}); 
//our listener
//then in phase5, we set up express under our const PORT, to handle data parsing with 
app.use(express.json()); 
//and changed the loop a bit to check by comparing routename to character name: 
for (let i = 0; i < characters.length; i++) {
    //if statement is true send back as JSON
    if(chosen === characters[i].routeName) {
        return res.json(characters[i]); 
    }
}
    //othewise no character found 
    res.json(false); 
}); //????
//create New Characters, takes in JSON input
app.post('/api/characters', (req, res) => {
    const newCharacter = req.body; 
    console.log(newCharacter); 
    characters.push(newCharacter); 
}); 
//our listener
//in episode 6 we added at dependencies, under require express, 
const path = require('path'); 
//sets up express app -> ? added between const app = express, and set up our Express app to handle data parsing with : 
app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 
//then our array of objects (data)
//and updated the Routes:
res.send("Welcome to this page")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view.html'))//view html was the name of the additional file in the activity
}); 
//displays all characters 
//app.get('/api/characters', (req, res) => res.json(characters)); 
//displays a single character or returns false 
//app.get('/api/characters/:character', (req, res) => { const chosen = req.params.character; 
//console.log(chosen); 
//for (let i = 0; i < characters.length; i++) {
    //if (chosen === characters[i].routeName) {
        //return res.json(characters[i]);
    //}
//}
//return res.json(false); 
//)}
//we create New Characters with JSON input: 
app.post('/api/characters', (req, res) => {
    //req.body hosts is equal to the JSON post sent from the user, works because of our body parsing middleware
    const newCharacter = req.body; 
    console.log(newCharacter); 
    //add the json the user sent to the character array
    characters.push(newCharacter); 
    //display the JSON to the user
    res.json(newCharacter)
}); 
//start the server to begin listening

//so now the task is to translate the above into applicable for the homework Notetaker app, with the provided starter code which always confuses me more than from scratch
//in the final episode, after const newCharacter = req.body; 
//using RegEx Pattern to remove spaces from newCharacter https://www.regexbuddy.com/regex.html
newCharacter.routeName = newCharacter.name. replace(/\s+/g, '').toLowerCase(); 
console.log(newCharacter); 
characters.push(newCharacter); 
res.json(newCharacter); 
//start the server
//episode 6 has additional files: view.html and add.html