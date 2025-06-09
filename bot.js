const { Telegraf, Markup } = require('telegraf');

// Replace with your actual bot token
const bot = new Telegraf('7500494853:AAFxgsOJQOjjE8jPiszkLKY60qiJWgmKNns');

// Small caps converter for name
function toSmallCaps(name) {
  const smallCapsMap = {
    A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ',
    G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ',
    M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ',
    S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x',
    Y: 'ʏ', Z: 'ᴢ'
  };
  return name.toUpperCase().split('').map(ch => smallCapsMap[ch] || ch).join('');
}

bot.start((ctx) => {
  const firstName = ctx.from.first_name || 'User';
  const formattedName = toSmallCaps(firstName);

  const message = `👋 Hello ${formattedName}\n𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗼𝘂𝗿 𝗿𝗲𝗻𝘁𝗮𝗹 𝗯𝗼𝗧 🙏`;

  return ctx.reply(message, Markup.keyboard([
    ['🤖 RENT BOT', '💰 DEPOSIT'],
    ['👨‍💻 PROFILE', '🛒 MY BOTS'],
    ['👍 CONTACT']
  ]).resize());
});

bot.launch();
