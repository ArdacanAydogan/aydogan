const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(' 🥒Hıyar Severmisin ? ')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media1.tenor.com/images/a078d6dfcf9ed3eada245e995f46d1af/tenor.gif?itemid=18592893`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hıyar',
  description: 'Hıyar verir :)',
  usage: 'hıyar'
};
