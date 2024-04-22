import { Scenes } from 'telegraf';
import { mainMenu } from '../../utils/buttons.js';
import { CMD_TEXT } from '../../config/constants.js';

export const historyScene = new Scenes.BaseScene('history');

historyScene.enter(async (ctx) => {
    await ctx.reply('Scene in progress');
});

// historyScene.hears(CMD_TEXT.weatherI, (ctx) => {
//     ctx.scene.leave();
//     ctx.scene.enter('weather');
// });

// historyScene.hears(CMD_TEXT.checkHistory, (ctx) => {
//     ctx.scene.leave();
//     ctx.scene.enter('history');
// });
