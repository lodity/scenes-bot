import getMessageForMarkdown from '../utils/getMessageForMarkdown.js';
import HistoryService from '../services/historyService.js';
import { historySceneButtons } from '../utils/buttons.js';

class HistoryController {
    async getHistory(ctx) {
        const historyNotes = await HistoryService.getNotes(ctx.from.id);
        const message = historyNotes
            .map((note, index) => {
                return `${index + 1}. Location: ${note.location}\nTemperature: ${note.temperature}°C\nWind speed: ${note.windspeed} m/s\nDate: ${note.date.toUTCString()}`;
            })
            .join('\n\n');
        console.log(message);
        await ctx.replyWithMarkdownV2(getMessageForMarkdown(message), historySceneButtons);
    }
}

export default new HistoryController();
