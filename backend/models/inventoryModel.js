
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inventorySchema = new Schema({
   subject: { type: String },
   body: { type: String },
   user: { type: String, required: true },
   comments: [{
      // an id referencing the comment
      type: mongoose.Types.ObjectId,
      // search for it in the Comments collection
      ref: 'Comment'
   }]
}, { timestamps: true })

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory