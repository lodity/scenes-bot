import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    id: { type: String, unique: true, required: true },
    temperature: { type: Number, required: true },
    windspeed: { type: Number, required: true },
    date: { type: Date, required: true },
});

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;
