const Discord = require('discord.js');
require("../ExtendedMessage.js");
exports.run = async (client, message, params, args) => {


 const koruma = new Discord.MessageEmbed()
 .setColor('01fa87')
 .addField(`<a:koruma:866629463524900884>  KORUMA SİSTEMİ `, `Çok Yakında ! `) 
 .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/867311294671093800/standard_3.gif") 
 .setFooter(`${message.author.username} tarafından Koruma Komutu Kullanıldı !`, message.author.avatarURL)
 message.inlineReply(koruma)
 message.delete({timeout: 5000});
};



exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [ 'guard','koruma-sistemi'],
 permLevel: 0
 };

 exports.help = {
 name: 'koruma',
 description: 'koruma1',
 usage: 'koruma'
 };


