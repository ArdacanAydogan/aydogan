const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message,args) => {
  const yardimembed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username}`, client.user.avatarURL())// komutu kullanan kişinin ismi ve yanına avatarı...
  .setColor('RANDOM')//embeddeki kenar rengini rast gele seçtim...
  .setTitle(`${client.user.username} | Admin Komutunu Kullandı`) //en üst kısım, botun ismi ve yazı
  .setDescription(`[Davet Et]()`) //davet için, aşağı kısım komut için
  .addField("Admin Komutları :", `\
    ay!botbilgi = Bot Bilgi 
    ay!ayrıl = Bot sunucudan ayrılır 
    ay!eval = Komutları denemek için kullanılan bir komuttur.
    ay!güncellemeduyurusu = güncelleme duyuru `)
    .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif")
  message.channel.send(yardimembed)//bu embedyardimin gideceği yer kullanılan kanal olarak ayarladık.
}
exports.conf = {
  enable: true, //komutun çalışıp çalışmamasını ayarlarsınız.
  guildOnly: false, //komutun özelde kapalı olmasını istiyorsanız false, dm de kullanılmasını isterseniz true yapın.
  aliases: ["admin",], //ek komut eklersiniz
  permLevel: 0 //kullanım izni, eğer rol bağlarsanız 0 yapın, yakında anlatım gelir.
}
exports.help = {
  name: "admin1", //komutu çalıştırmaya yarıyor.
  description: "yardım komutudur", // komut hakkında açıklama yapar önemli bir şey değildir.
  usage: "yardım" //kullanımı gösterir buda önemli değildir.
}
