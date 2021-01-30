const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Özel Mesaj Olarak Kullanılmaz ! **')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Yapımcım ')
    .setColor('RANDOM')
      .setAuthor(` Yapımcım Ardacan Aydoğan#4244 `)
      .setImage ('https://cdn.discordapp.com/attachments/783055798229401660/796475791998320660/103832815_583201635668754_431017515971220890_n.jpg')
      return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımcım"],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  usage: 'yapımcı'
};
