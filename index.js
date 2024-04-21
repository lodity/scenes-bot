import 'dotenv/config';
import mongoose from 'mongoose';
import setupBot  from './bot.js';

(async function () {
    try {
        await mongoose.connect(process.env.DB_TOKEN);
        console.log('MongoDB connected');

        await setupBot().launch();
        console.log('Bot started');
    } catch (error) {
        console.log(error);
    }
})();
