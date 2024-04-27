import { Scenes, Telegraf, session } from 'telegraf';
import { backMenu, start } from './controllers/command.js';
import { weatherScene } from './controllers/scenes/weather.js';
import { startScene } from './controllers/scenes/start.js';
import { historyScene } from './controllers/scenes/history.js';
import { CMD_TEXT } from './config/constants.js';
import reloadScene from './utils/reloadScene.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([startScene, weatherScene, historyScene]);

const setupBot = () => {
    bot.use(session());
    bot.use(stage.middleware());

    // bot.use((ctx, next) => next());
    bot.start(start);
    bot.on('message', (ctx) => {
        if (!ctx.scene.current) reloadScene(ctx, 'start');
        if (ctx.message.text === CMD_TEXT.menu) backMenu(ctx);
    });
    // bot.hears(CMD_TEXT.weatherI, startWhatWeather);
    return bot;
};

export default setupBot;
