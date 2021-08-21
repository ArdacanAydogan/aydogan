const Discord = require('discord.js');

let botid = ('584513444066099210') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`ÇOK YAKINDA :)`)
 message.channel.send(embed);

};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
};

exports.help = {
 name: 'oyver',
 description: '',
 usage: 'oyver'
};