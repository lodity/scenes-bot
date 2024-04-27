import { Scenes, Composer } from 'telegraf';
import { CMD_TEXT } from '../../config/constants.js';
import historyController from '../historyController.js';
import reloadScene from '../../utils/reloadScene.js';

const enter = async (ctx) => {
    console.log('Entering step 1');
    await historyController.askNotesToShow(ctx);
    return ctx.wizard.next();
};

const enterCountOfNotes = new Composer();
enterCountOfNotes.on('message', async (ctx) => {
    // historyController.getHistory(ctx);
    // await ctx.reply("Enter count of notes you want to see");

    if (isNaN(ctx.message.text)) {
        await ctx.reply(`${ctx.message.text} not a number. Enter number of notes`);
        return;
    }

    console.log(ctx.message.text);
    historyController.getHistory(ctx, ctx.message.text);
    return ctx.wizard.next();
});

export const historyScene = new Scenes.WizardScene('history', enter, enterCountOfNotes);

const notesCount = 0;

// historyScene.enter(async (ctx) => {
//     console.log('Entering historyScene');
//     // historyController.getHistory(ctx);
//     // await ctx.reply("Enter count of notes you want to see");
//     // await historyController.askNotesToShow(ctx);
// });

// historyScene.hears(CMD_TEXT.refresh, (ctx) => {
//     historyController.getHistory(ctx);
// });

historyScene.hears(CMD_TEXT.menu, (ctx) => {
    reloadScene(ctx, 'start');
});

// historyScene.on('message', (ctx) => {
//     if (ctx.scene.current && ctx.scene.current.id === 'history' && ctx.wizard.cursor !== 0)
//         reloadScene(ctx, 'history');
// });
