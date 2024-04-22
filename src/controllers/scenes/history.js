import { Scenes } from 'telegraf';
import { CMD_TEXT } from '../../config/constants.js';
import historyController from '../historyController.js';

export const historyScene = new Scenes.BaseScene('history');

historyScene.enter(async (ctx) => {
    historyController.getHistory(ctx);
});

historyScene.hears(CMD_TEXT.refresh, (ctx) => {
    historyController.getHistory(ctx);
});

historyScene.hears(CMD_TEXT.menu, (ctx) => {
    ctx.scene.leave();
    ctx.scene.enter('start');
});
