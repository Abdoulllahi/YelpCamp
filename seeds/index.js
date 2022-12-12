/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2022-12-12 12:09:20
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2022-12-12 15:46:50
 * @ Description:
 */

const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../models/campground');
const { places, descriptors } = require('./seedHelpers')

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

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        random1000 = Math.floor(Math.random() * 1000);
        // console.log(cities[random1000], random1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        });
        await camp.save();
    }
};
seedDB().then(() => {
    mongoose.connection.close();
}) 