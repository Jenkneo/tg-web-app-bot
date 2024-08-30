const TelegramBot = require('node-telegram-bot-api');

const token = '<your-telegram-key>';
const webAppUrl = "<your-webapp-url>";
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text == "/start"){
    await bot.sendMessage(chatId, 'Hello', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Форма', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }
});