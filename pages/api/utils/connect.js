import mongoose from 'mongoose';
export async function dbConnect() {
    mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
        .then(db => console.log("conectado a mongo : ", db.connection.host + ':' + db.connection.port))
        .catch(error => console.log(error))
}

