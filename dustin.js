// // const express = require('express');
// // const PORT = process.env.PORT || 3001;
// // const app = express();
// // const path = require('path');
// // const fs = require('fs');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));
// app.get("/", function(req, res){
//     res.sendFile("./public/index.html")
// })

// app.get("/notes", function(req, res){
//     res.sendFile(path.join(__dirname, "./public/notes.html"))
// })

// app.get("/api/notes", function(req, res){
//     let allSavedNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"))
//     allSavedNotes = JSON.parse(allSavedNotes)
//     res.json(allSavedNotes)
// })

// app.post("/api/notes", function(req, res){
//     let allSavedNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"))
//     allSavedNotes = JSON.parse(allSavedNotes)
//     allSavedNotes.push(req.body)
//     allSavedNotes = JSON.stringify(allSavedNotes)
//     fs.writeFileSync(path.join(__dirname, "./db/db.json"),allSavedNotes)
//     allSavedNotes = JSON.parse(allSavedNotes)
//     res.json(allSavedNotes)
// })

// app.listen(PORT, () => {
//   console.log(`API server now on port ${PORT}!`);
// });
