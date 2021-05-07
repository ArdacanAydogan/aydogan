const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(':bar_chart: İstatistik;')
    .addField('<a:gecikme:786689726891294770> Gecikme: ', client.ping + 'ms')
    .addField(':construction_worker: Çalışma Süresi: ', `${duration}`)
    .addField(':busts_in_silhouette: Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(':tv: Kanallar:', client.channels.size)
    .addField(':clipboard: Sunucular:', client.guilds.size)
    .addField('<a:uptime:782380805120196618> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(':closed_book:  Kütüphanesi;', `Discord.js`)
    .addField(`Discord.js sürümü:`, Discord.version)
      .addField('<a:developever:786687264360497162>  Yapımcım:', '<@449603871929532418> , <@684722646830940201>')
    .setFooter('AYDOĞAN', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [ 'botbilgi', 'bot-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};