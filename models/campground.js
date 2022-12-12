/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2022-12-12 00:57:22
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2022-12-12 01:28:53
 * @ Description:
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);