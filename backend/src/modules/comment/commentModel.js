import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  sendTime: {
    type: Date,
    default: new Date()
  },
  message: {
    type: String,
    required: true
  },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section'
  }
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
})

commentSchema.index({ sendTime: -1 })

const CommentModel = mongoose.model('Comment', commentSchema)

export default CommentModel
