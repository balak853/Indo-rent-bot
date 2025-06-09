const { Telegraf, Markup } = require('telegraf');

// Bot token (pre-filled)
const bot = new Telegraf('7500494853:AAFxgsOJQOjjE8jPiszkLKY60qiJWgmKNns');

// Small caps converter
function toSmallCaps(name) {
  const map = {
    A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ',
    G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ',
    M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ',
    S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x',
    Y: 'ʏ', Z: 'ᴢ'
  };
  return name.toUpperCase().split('').map(ch => map[ch] || ch).join('');
}

bot.start((ctx) => {
  const firstName = ctx.from.first_name || 'User';
  const fancyName = toSmallCaps(firstName);

  const message = `👋 Hello ${fancyName}\n𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗼𝘂𝗿 𝗿𝗲𝗻𝘁𝗮𝗹 𝗯𝗼𝗧 🙏`;

  return ctx.reply(message, Markup.keyboard([
    ['🤖 RENT BOT', '💰 DEPOSIT'],
    ['👨‍💻 PROFILE', '🛒 MY BOTS'],
    ['👍 CONTACT']
  ]).resize());
});

// Webhook handler for Vercel
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
    } catch (err) {
      console.error("Error handling update:", err);
    }
    return res.status(200).send('OK');
  }
  return res.status(200).send('Bot is Live 🚀');
};
