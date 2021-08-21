const discord = require('discord.js');

exports.run = function (client, message, args) {
   
const sunucu = client.guilds.cache.size
const user = client.users.cache.size
const kanal = client.channels.cache.size

const sahip = message.author.tag

message.channel.send(
new discord.MessageEmbed()
.setTitle("Bilgi")
.addField("Toplam Sunucu: ", sunucu)
.addField("Toplam Kullanıcı: ", user)
.addField("Toplam Kanal: ", kanal)
.setFooter(sahip + " Tarafından kullanıldı")
.setTimestamp()
  )
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'botbilgi'
};