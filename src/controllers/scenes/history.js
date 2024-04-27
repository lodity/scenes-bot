import { Scenes, Composer } from 'telegraf';
import { CMD_TEXT } from '../../config/constants.js';
import historyController from '../historyController.js';
import reloadScene from '../../utils/reloadScene.js';

const enter = async (ctx) => {
    await historyController.askNotesToShow(ctx);
    return ctx.wizard.next();
};

const enterCountOfNotes = new Composer();

enterCountOfNotes.on('message', async (ctx) => {
    if (isNaN(ctx.message.text)) {
        await ctx.reply(`${ctx.message.text} not a number. Enter number of notes`);
        return;
    }

    console.log(ctx.message.text);
    historyController.getHistory(ctx, ctx.message.text);
    return ctx.wizard.next();
});

const showHistory = new Composer();

showHistory.hears(CMD_TEXT.changeLimit, async (ctx) => {
    await historyController.askNotesToShow(ctx);
    await ctx.wizard.selectStep(1);
});

showHistory.on('message', async (ctx) => {
    if (ctx.message.text === CMD_TEXT.changeLimit) {
        return;
    }
    console.log(ctx.message.text);
    historyController.getHistory(ctx, ctx.message.text);
    return ctx.wizard.next();
});

export const historyScene = new Scenes.WizardScene(
    'history',
    enter,
    enterCountOfNotes,
    showHistory,
);

historyScene.hears(CMD_TEXT.menu, (ctx) => {
    reloadScene(ctx, 'start');
});

// historyScene.on('message', async (ctx) => {
//     console.log(ctx.message);
//     console.log(ctx.scene.current);
//     console.log(ctx.scene.current.id);
//     console.log(ctx.wizard.cursor);
//     // if (ctx.wizard.cursor === 0) {
//     //     // Відправити повідомлення до першого кроку
//     //     return enter(ctx);
//     // }
//     // if (ctx.scene.current && ctx.scene.current.id === 'history' && ctx.wizard.cursor !== 1) {
//     //     reloadScene(ctx, 'history');
//     // }
//     if (ctx.scene.current && ctx.scene.current.id === 'history') {
//         if (ctx.wizard.cursor === 0) {
//             const step = ctx.wizard.steps[0];
//             return step(ctx);
//         } else if (ctx.wizard.cursor === 1) {
//             // const step = ctx.wizard.steps[1];
//             // return step(ctx);
//             ctx.wizard.selectStep(1);
//             return ctx.wizard.next();
//         } else if (ctx.wizard.cursor === 2) {
//             const step = ctx.wizard.steps[2];
//             return step(ctx);
//         }
//     }
//     // Якщо не один з візард кроків, можна обробити повідомлення іншим чином або перезавантажити сцену
//     if (ctx.wizard.cursor !== 0) {
//         reloadScene(ctx, 'history');
//     }
// });
