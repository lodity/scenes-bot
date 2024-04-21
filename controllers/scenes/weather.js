import { Scenes } from 'telegraf';
import { backButtonMenuAndLocation } from '../../utils/buttons.js';
import { getWeatherLocationCoord } from '../../services/getWeatherLocation.js';
import { getMessageForMarkdown } from '../../utils/getMessageForMarkdown.js';
import { CMD_TEXT } from '../../config/constants.js';
import { backMenu } from '../command.js';

export const weatherScene = new Scenes.BaseScene('weather');

weatherScene.enter(async (ctx) => {
    await ctx.reply('Find out weather in your area', backButtonMenuAndLocation);
});

weatherScene.on('location', async (ctx) => {
    try {
        const message = ctx.message;
        const { latitude, longitude } = message.location;

        const data = await getWeatherLocationCoord({ latitude, longitude });
        const messageToSend =
            'Your weather: \n\n' +
            'Temperature: ' +
            data.current_weather.temperature +
            '°C\n' +
            'Wind speed: ' +
            data.current_weather.windspeed +
            ' m/s';
        await ctx.replyWithMarkdownV2(getMessageForMarkdown(messageToSend));
    } catch (error) {
        console.log(error);
        await ctx.reply('Something went wrong');
    }
});

weatherScene.hears(CMD_TEXT.menu, (ctx) => {
    ctx.scene.leave();
    return backMenu(ctx);
});
