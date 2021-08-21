const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if (!message.guild) {
 const ozelmesajuyari = new Discord.MessageEmbed()
 .setColor(0xFF0000)
 .setTimestamp()
 .setAuthor(message.author.username, message.author.avatarURL)
 .addField(':warn: Uyarı :warn: ', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
 return message.author.send(ozelmesajuyari); }
 let guild = message.guild
 let reason = args.slice(1).join(' ');
 let user = message.mentions.users.first();
 let modlog = guild.channels.cache.find((x) => x.name === 'aydogan-log');
 if (!modlog) return message.reply('`aydogan-log` kanalı oluşturman lazım.');
 if (reason.length < 1) return message.reply('niye kick adamı onu yazaydın.');
 if (message.mentions.users.cache.size < 1) return message.reply('kimi kickleyecem onu yaz.').catch(console.error);

 if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
 message.guild.member(user).kick();

 const embed = new Discord.MessageEmbed()
 .setColor(0x00AE86)
 .setTimestamp()
 .addField('Eylem:', 'Sunucudan atma')
 .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
 .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
 .addField('Sebep', reason);
 return guild.channels.cache.get(modlog.id).send(embed);
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['at'],
 permLevel: 2
};

exports.help = {
 name: 'kick',
 description: 'İstediğiniz kişiyi sunucudan atar.',
 usage: 'kick [kullanıcı] [sebep]'
};