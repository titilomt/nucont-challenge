const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NucontSchema = new Schema ({
  description: String,
  classifier: String,
  openingBalance: Number,
  debit: Number,
  credit: Number,
  finalBalance: Number,
  parent: String | null
});

module.exports = mongoose.model('NucontModel', NucontSchema);
