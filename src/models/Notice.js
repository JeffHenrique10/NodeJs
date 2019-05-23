const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

NoticeSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Notice', NoticeSchema)
