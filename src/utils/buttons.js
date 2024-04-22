import { Markup } from 'telegraf';
import { CMD_TEXT } from '../config/constants.js';

export const mainMenu = Markup.keyboard([[CMD_TEXT.weatherI], [CMD_TEXT.checkHistory]]).resize();

export const backButtonMenu = Markup.keyboard([CMD_TEXT.menu]).resize();

export const backButtonMenuAndLocation = Markup.keyboard([
    Markup.button.locationRequest('Send my location'),
    Markup.button.text(CMD_TEXT.menu),
]).resize();

export const historySceneButtons = Markup.keyboard([[CMD_TEXT.refresh], [CMD_TEXT.menu]]).resize();
