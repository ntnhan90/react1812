const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:123@ds125489.mlab.com:25489/word1203xxx')
.then(() => console.log('Database connected.'))
.catch((error) => console.log('Cannot connect database.', error))

const wordSchema = new mongoose.Schema({
    en: { type: String, trim: true, unique: true, required: true },
    vn: { type: String, trim: true, required: true },
    isMemorized: { type: Boolean, default: false, required: true }
});

const Word = mongoose.model('Word', wordSchema);

module.exports = { Word };

// const word = new Word({ en: 'Four', vn: 'Bon' });
// word.save()
// .then(w => console.log(w))
// .catch(error => console.log(error));

// Word.find({ en: 'Five' })
// .then(words => console.log(words))
// .catch(error => console.log(error));

// Word.findOne({ en: 'Five' })
// .then(word => console.log(word))
// .catch(error => console.log(error));

// Word.findById('5ab8ba82348d8f5640808522')
// .then(word => console.log(word))
// .catch(error => console.log(error));

// Word.findByIdAndRemove('5ab8ba82348d8f5640808522')
// .then(word => console.log(word))
// .catch(error => console.log(error));

// Word.findOneAndRemove({ en: 'Five' })
// .then(word => console.log(word))
// .catch(error => console.log(error));

// Word.remove({})
// .then(x => console.log(x))
// .catch(error => console.log(error));

// Word.findByIdAndUpdate('5ab8bdfe4b39155734618af7', { en: 'five' }, { new: true })
// .then(word => console.log(word))
// .catch(error => console.log(error));

// Word.findOneAndUpdate({ en: 'Four' }, { vn: 'BON' }, { new: true })
// .then(word => console.log(word))
// .catch(error => console.log(error));

// Word.updateMany({}, { isMemorized: false }, { new: true })
// .then(x => console.log(x))
// .catch(error => console.log(error));
