const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('<a:istatistik:847133813053194251> İstatistik;')
    .addField('<a:gecikme:786689726891294770> Gecikme: ', client.ws.ping + 'ms')
    .addField('<a:ayar2:844452728662655006>  Çalışma Süresi: ', `${duration}`)
    .addField(':busts_in_silhouette: Kullanıcılar:', client.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
    .addField(':tv: Kanallar:', client.channels.cache.size.toLocaleString(), true)
    .addField(':clipboard: Sunucular :', client.guilds.cache.size)
    .addField('<a:uptime:782380805120196618> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('<a:kitap:854275159669735454> Kütüphanesi : ', `Discord.js`)
    .addField(`<a:discord:796680487912341525> Discord.js sürümü:`, Discord.version)
    .addField(`<:nodejs:874628485430259742> Node.js sürümü`, `${process.version}`, true)
    .addField("CPU", `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``)
    .addField("Bit", `\`${os.arch()}\``, true)
    .addField("İşletim Sistemi", `\`\`${os.platform()}\`\``)
      .addField('<a:developer2:844453140144848927> Yapımcım:', '<@449603871929532418> ')
    .setImage('https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif')
      .setFooter('AYDOĞAN', client.user.avatarURL())
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [ 'i', 'bot-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};