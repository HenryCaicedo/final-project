const mapaSchema = new mongoose.Schema({
    unidad: String,
    nivel: mongoose.Schema.Types.ObjectId,
    instrucciones:{ // Se asume que es el minimo numero de instrucciones por estrella.
        uno: Number,
        dos: Number,
        tres: Number,
    },
});