import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    userId: { type: Number, required: true },
    temperature: { type: Number, required: true },
    windspeed: { type: Number, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
});

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;
