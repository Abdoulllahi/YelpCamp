/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2022-12-12 00:34:06
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2022-12-12 20:13:15
 * @ Description:
 */

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!!!')
});