const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:error:783119570092163112>  Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')

  const Bilgi = new Discord.MessageEmbed()
    .setColor('#000096')
    .setThumbnail(client.user.avatarURL)
    .addField(`**${client.user.username} | Oto-Cevap Sistemi**`, 'Oto-Cevap Sistemi, Sunucunuza Gelenlerin Bazı Yazıları Yazmaları Durumunda Botun Onlara Verecek Tepkisidir.\nBu Yazılara `sa / slm / selam / selamın aleyküm / sea / selamun aleyküm - Aleyküm Selam, Hoşgeldin!`, `naber / nasılsınız / nbr - İyi, sen?`, `görüşürüz / bye bye / bye / bay / bay bay / bb / güle güle - Hoşçakal!` Dahildir.\nAçmak için **ay!otocevap aç**, kapatmak için **ay!otocevap kapat** yazmalısınız.')
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp()
    .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif")
  if (!args[0]) return message.channel.send(Bilgi).then(msg => msg.delete(9000))

  
  const Açık = new Discord.MessageEmbed()
    .setColor('#960000')
    .setThumbnail(client.user.avatarURL)
    .addField('**AYDOĞAN | Oto-Cevap Sistemi**', '<a:mavitik2:803612437479686164> Oto-Cevap Başarıyla Açıldı!')
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp()
    .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif")
  if (args[0] == 'aç') {
    db.set(`otocevap_${message.guild.id}`, 'açık'); message.channel.send(Açık).then(msg => msg.delete(9000))
  }

  const Kapalı = new Discord.MessageEmbed()
    .setColor('#960000')
    .setThumbnail(client.user.avatarURL)
    .addField('**AYDOĞAN | Oto-Cevap Sistemi**', '<a:mavitik2:803612437479686164> Oto-Cevap Başarıyla Kapatıldı!')
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp()
    .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif")
  if (args[0] == 'kapat') {
    db.set(`otocevap_${message.guild.id}`, 'kapali'); message.channel.send(Kapalı).then(msg => msg.delete(9000))
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oto-cevap','otocevap'],
  permLevel: 4
}

exports.help = {
  name: 'Oto-Cevap'
}