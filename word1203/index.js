const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const faker = require('faker');
const uuid = require('uuid');
const { Word } = require('./Word');

// const parser = bodyParser.urlencoded({ extended: false });
const parser = bodyParser.json();

const app = express();

app.get('/', (req, res) => res.send('Running'));
app.use(cors());
app.use(parser);

app.get('/word', (req, res) => {
    // Show ra tat ca words
    Word.find({})
        .then(words => res.send({ success: true, words }))
        .catch(error => res.send({ success: false, error: error.message }));
});

app.delete('/word/:_id', (req, res) => {
    Word.findByIdAndRemove(req.params._id)
        .then(word => {
            if (!word) throw new Error('Cannot find word.');
            res.send({ success: true, word });
        })
        .catch(error => res.send({ success: false, error: error.message }))
});

app.post('/word', (req, res) => {
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
        .then(word => res.send({ success: true, word }))
        .catch(error => res.send({ success: false, error: error.message }));
});

app.put('/word/:_id', (req, res) => {
    const { isMemorized } = req.body;
    Word.findByIdAndUpdate(req.params._id, { isMemorized }, { new: true })
        .then(word => {
            if (!word) throw new Error('Cannot find word.');
            res.send({ success: true, word });
        })
        .catch(error => res.send({ success: false, error: error.message }));
});

app.get('/user', (req, res) => {
    const users = [];
    for(let index = 0; index < 4; index++) {
        const user = {
            _id: uuid(),
            name: faker.name.firstName(),
            image: faker.image.avatar(),
            email: faker.internet.email()
        };
        users.push(user);
    }
    res.send({ success: true, users });
});

app.listen(process.env.PORT || 4000, () => console.log('Server started.'));
