const express = require('express');
const app = express();
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

function createNewNote(body, notesArr) {
    // our function's main code will go here!
    const note = body;
    notesArr.push(note);
    console.log(notesArr);
    // return finished code to post route for response
    return note;
};

// app.get('/notes', (req, res) => {
//     res.json(notes);
// });

app.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, notes);
    res.json(notes);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});