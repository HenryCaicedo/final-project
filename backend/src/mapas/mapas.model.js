const mongoose = require('mongoose');
const mapaSchema = new mongoose.Schema({
  unidad: {
    type: Number,
    required: true,
  },
  nivel: {
    type: Number,
    required: true,
  },
  diseno: {
    type: Object,
    default: [],
  },
});
mapaSchema.index({ unidad: 1, nivel: 1 }, { unique: true });
const mapaModel = mongoose.model('mapas', mapaSchema);
export default mapaModel;
