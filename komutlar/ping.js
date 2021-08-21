const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

 let start = Date.now(); message.channel.send( '<a:__:782271086334312498> Yükleniyor ').then(message => { 
 let diff = (Date.now() - start); 
 let API = (client.ws.ping).toFixed(2)
 
 let embed = new Discord.MessageEmbed()
 .setTitle(`Ping Değerleri :`)
 .setColor(0xff2f2f)
 addField("<a:gecikme:786689726891294770> Mesaj Gecikmesi", `${diff}ms`, true)
        .addField("<a:ykleniyo:841928598544842804> Bot Gecikmesi", `${API}ms`, true)
 message.edit(embed);
 
 });

}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
 };

exports.help = {
 name: 'ping',
 category: 'INFO'
}