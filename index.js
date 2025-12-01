import TelegramBot from "node-telegram-bot-api";

const TOKEN = "PASTE_YOUR_BOT_TOKEN_HERE";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Welcome to Onbrela Support 👋\n\nHow can I help you today?",
    {
      reply_markup: {
        keyboard: [
          ["🔧 Technical Issue"],
          ["🚚 Track Your Order"],
          ["💳 Payment Issue"],
          ["💬 Chat with an Agent"],
        ],
        resize_keyboard: true,
      },
    }
  );
});
