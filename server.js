const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req, res){
    let notesSaved = fs.readFileSync(path.join(__dirname, "./db/db.json"));
    notesSaved = JSON.parse(notesSaved);
    res.json(notesSaved);
});

app.delete("/api/notes/:id", (req, res) => {
    let notesSaved = fs.readFileSync(path.join(__dirname, "./db/db.json"));
    notesSaved = JSON.parse(notesSaved);
    let noteID = req.params.id;
    notesSaved = notesSaved.filter(thisNote => {
        return thisNote.id != noteID;
    });
    fs.writeFileSync("./db/db.json", JSON.stringify(notesSaved));
    res.json(notesSaved);
});

app.post('/api/notes', (req, res) => {
    let notesSaved = JSON.parse(fs.readFileSync("./db/db.json"));
    let noteID = (notesSaved.length).toString();
    let noteNew = req.body;
    noteNew.id = noteID;
    notesSaved.push(noteNew);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesSaved));
    res.json(notesSaved);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});