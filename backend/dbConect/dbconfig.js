import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/issues').catch((console.error))
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

export default mongoose;