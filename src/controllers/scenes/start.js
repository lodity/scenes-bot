import { Scenes } from 'telegraf';
import { mainMenu } from '../../utils/buttons.js';
import { CMD_TEXT } from '../../config/constants.js';

export const startScene = new Scenes.BaseScene('start');

startScene.enter(async (ctx) => {
    await ctx.reply('Menu', mainMenu);
});

startScene.hears(CMD_TEXT.weatherI, (ctx) => {
    ctx.scene.leave();
    ctx.scene.enter('weather');
});

startScene.hears(CMD_TEXT.checkHistory, (ctx) => {
    ctx.scene.leave();
    ctx.scene.enter('history');
});
