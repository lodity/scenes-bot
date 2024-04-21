import { mainMenu } from '../utils/buttons.js';

export const start = (ctx) => ctx.reply('Hello! Welcome to weather bot', mainMenu);

export const backMenu = (ctx) => ctx.reply('Back to main menu', mainMenu);

// Enter in Base scene
export const startWhatWeather = (ctx) => ctx.scene.enter('weather');
