import { Scenes } from 'telegraf';
import { mainMenu } from '../../utils/buttons.js';
import { CMD_TEXT } from '../../config/constants.js';
import reloadScene from '../../utils/reloadScene.js';

export const startScene = new Scenes.BaseScene('start');

startScene.enter(async (ctx) => {
    await ctx.reply('Menu', mainMenu);
});

startScene.hears(CMD_TEXT.weatherI, (ctx) => {
    reloadScene(ctx, 'weather');
});

startScene.hears(CMD_TEXT.checkHistory, (ctx) => {
    reloadScene(ctx, 'history');
});

startScene.on('message', (ctx) => {
    reloadScene(ctx, 'start');
});
