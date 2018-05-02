const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const NotesHandler = require('./server/NotesHandler');

const app = express();
const port = process.env.PORT || 5000;
const notesDB = new NotesHandler();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello from express' });
});

app.get('/api/notes', (req, res) => {
    const notes = notesDB.read();
    res.json(notes);
});

app.post('/api/createnote', (req, res) => {
    console.log('/api/createnote', req.body);
    const note = {
        title: req.body.title,
        note: req.body.note,
        created: Date.now(),
        updated: Date.now()
    }
    notesDB.create(note);
    res.json({ res: "CREATED", note });
});

app.post('/api/updatenote', (req, res) => {
    console.log('/api/updatenote', req.body);
    const note = {
        id: req.body.id,
        title: req.body.title,
        note: req.body.note,
        updated: Date.now()
    }
    notesDB.update(note);
    res.json({ res: "UPDATED", note });
});

app.post('/api/deletenote', (req, res) => {
    console.log('/api/deletenote', req.body.id);
    notesDB.delete(req.body.id);
    res.json({ res: "DELETED", note: { id: req.body.id } });
});

app.post('/api/getnote', (req, res) => {
    console.log('/api/getnote', req.body.id);
    const note = notesDB.read(req.body.id);
    res.json({ res: "SUCCESS", note });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

