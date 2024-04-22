import { mainMenu } from '../utils/buttons.js';
import User from '../models/user.js';

export const start = async (ctx) => {
    await ctx.reply('Hello! Welcome to weather bot');
    console.log(ctx.from);
    const id = ctx.from.id;
    const dbUser = await User.findOne({ id });

    if (!dbUser) {
        await createUser(id);
        return ctx.scene.enter('setBirthYear');
    } else if (!dbUser.birthYear) return ctx.scene.enter('setBirthYear');

    await ctx.scene.enter('start');
};

export const backMenu = (ctx) => {
    ctx.reply('Back to main menu', mainMenu);
    ctx.scene.leave();
    start(ctx);
};
