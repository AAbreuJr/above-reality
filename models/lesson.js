const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lessonSchema = new Schema ({
  title: {type: String, require: true},
})

module.exports = mongoose.model('Lesson', lessonSchema)