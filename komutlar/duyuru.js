const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 if (mesaj.length < 1) return message.inlineReply('<a:error:783119570092163112> Yazmam İçin Birşey Yazmalısın!');
 message.delete({timeout: 5000});
 const embed = new Discord.MessageEmbed()
 .setAuthor('DUYURU')
 .setColor('FF0000')
 .setDescription(`${mesaj}`)
 return message.channel.send(embed);
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['duyuryap', 'duyur'],
 permLevel: 2
};

exports.help = {
 name: 'duyuru',
 description: 'Güzel Bir Duyuru Görünümü Sağlar.',
 usage: 'duyuru [Duyuruda Yazıcak Şey]'
};