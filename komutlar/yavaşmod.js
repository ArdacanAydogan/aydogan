const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
if (msg.channel.type !== "text") return;
 
const limit = args[0];
 
 if(!limit) {
 var embed = new Discord.MessageEmbed()
 .setDescription(`Yazma sınırını (süresini) kaç saniye olarak ayarlamak istediğinizi yazınız!`)
 .setColor("RANDOM")
 msg.channel.send({embed: embed})
 return
 }
 
if (isNaN(limit)) {
 var s = new Discord.MessageEmbed()
 .setDescription("Yazma Süresi kaç saniye olarak ayarlamak istediğinizi yazınız !")
 .setColor("RANDOM")
 msg.channel.send({embed: s});
 return
}
 
 var e = new Discord.MessageEmbed()
 .setDescription(`<a:mavitik2:803612437479686164> Yazma Süresi başarıyla **${limit}** saniye olarak ayarlanmıştır ! `)
 .setColor("RANDOM")
 msg.channel.send({embed: e})
 
var request = require('request');
request({
 url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
 method: "PATCH",
 json: {
 rate_limit_per_user: limit
 },
 headers: {
 "Authorization": `Bot ${client.token}`
 },
})};
 exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
 permLevel: 4,
 kategori: "moderasyon"
};

exports.help = {
 name: 'yavaş-mod',
 description: 'Bulunduğunuz kanala yazma sınırı (süresi) ekler.',
 usage: 'yavaş-mod <1/10>',
};

