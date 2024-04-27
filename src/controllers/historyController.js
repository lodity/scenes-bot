import getMessageForMarkdown from '../utils/getMessageForMarkdown.js';
import HistoryService from '../services/historyService.js';
import { historyEnterCountOfNotes, historySceneButtons } from '../utils/buttons.js';

class HistoryController {
    async getHistory(ctx, limit = 3) {
        const historyNotes = await HistoryService.getNotes(ctx.from.id, limit);
        const message = historyNotes
            .map((note, index) => {
                return `${index + 1}. Location: ${note.location}\nTemperature: ${note.temperature}°C\nWind speed: ${note.windspeed} m/s\nDate: ${note.date.toUTCString()}`;
            })
            .join('\n\n');
        console.log(message);
        await ctx.replyWithMarkdownV2(getMessageForMarkdown(message), historySceneButtons);
    }
    async askNotesToShow(ctx) {
        const notesCount = await HistoryService.getNotesCount(ctx.from.id);
        const message = `You have ${notesCount} notes.\nEnter count of notes you want to see`;
        await ctx.reply(message, historyEnterCountOfNotes);
    }
}

export default new HistoryController();
