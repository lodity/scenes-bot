import 'dotenv/config';
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('ping', async (ctx) => {
    await ctx.reply(`Pong!`);
});

bot.on(message('text'), async (ctx) => {
    await ctx.reply(`Ping?`);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
