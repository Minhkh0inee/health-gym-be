const mongoose = require("mongoose");
const { Schema } = mongoose;

const healthSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  weight: {
    type: Number
  },
  height: {
    type: Number //should be 163, not 1.63
  },
  bodyFatPercentage: {
    type: Number,
  }, 

  dateRecorded: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true});

const HealthModel = mongoose.model('Health', healthSchema)

module.exports = HealthModel