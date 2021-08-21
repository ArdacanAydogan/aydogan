const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "449603871929532418") return message.reply(':no_entry: Sahibim Sen Değilsin');
   message.channel.send('İstediğin Sunucudan Ayrıldım <@449603871929532418> ');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};