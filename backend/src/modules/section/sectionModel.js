import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
})

const SectionModel = mongoose.model('Section', sectionSchema)

export default SectionModel
