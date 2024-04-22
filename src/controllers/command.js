import { mainMenu } from '../utils/buttons.js';
import User from '../models/user.js';
import UserService from '../services/userService.js';

export const start = async (ctx) => {
    await ctx.reply('Hello! Welcome to weather bot');
    const user = ctx.from;
    const dbUser = await User.findOne({ id: user.id });

    if (!dbUser) {
        await UserService.createUser({
            id: user.id,
            firstName: user.first_name,
            username: user.username,
        });
    }

    await ctx.scene.enter('start');
};

export const backMenu = (ctx) => {
    ctx.reply('Back to main menu', mainMenu);
    ctx.scene.leave();
    start(ctx);
};
