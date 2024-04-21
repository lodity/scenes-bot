import { Scenes, Telegraf, session } from 'telegraf';
import { backMenu, start, startWhatWeather } from './controllers/command.js';
import { CMD_TEXT } from './config/constants.js';
import { whatWeatherScene } from './controllers/scenes/weatherScene.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([whatWeatherScene]);

const setupBot = () => {
    bot.use(session({ collectionName: 'sessions' }));
    bot.use(stage.middleware());

    bot.use((ctx, next) => next());
    bot.start(start);
    bot.hears(CMD_TEXT.menu, backMenu);
    bot.hears(CMD_TEXT.weatherI, startWhatWeather);
    return bot;
};

export default setupBot;
