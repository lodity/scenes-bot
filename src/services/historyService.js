import Weather from '../models/weather.js';

class HistoryService {
    async addNote({ userId, temperature, windspeed, latitude, longitude }) {
        try {
            const weather = new Weather({
                userId,
                temperature,
                windspeed,
                date: new Date(),
                location: `lat: ${latitude}, long: ${longitude}`,
            });
            await weather.save();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    async getNotes(userId, limit) {
        try {
            const notes = limit
                ? await Weather.find({ userId }).limit(limit)
                : await Weather.find({ userId });
            return notes;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    async getNotesCount(userId) {
        try {
            const count = await Weather.countDocuments({ userId });
            return count;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}

export default new HistoryService();
