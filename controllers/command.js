import { mainMenu } from '../utils/buttons.js';

export const start = (ctx) => {
    ctx.reply('Hello! Welcome to weather bot');
    ctx.scene.enter('start');
};

export const backMenu = (ctx) => {
    ctx.reply('Back to main menu', mainMenu);
    ctx.scene.leave();
    start(ctx);
};
