'use scrict'
//Importamos la conexión  a nuestra base de datos mongoose
//y declaramos una instancia de tipo mongoose.Schema.


var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var VersionSchema = new Schema(
    {
        version:{
            type: String,
            trim: true,
            require: 'Inserta una version por favor',
            default: '',
            index: {
                unique: false,
             }
        }

    },
    {
        timestamps: true
    }
)





//por fin chingao ya era hora

var Version = mongoose.model('Version', VersionSchema);

module.exports = Version;