import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Poi = new Schema({
  name: {
    type: String,
    require: true
  },
  value: {
    type: Array,
    require: true
  }
})

export default mongoose.model('City', City)
