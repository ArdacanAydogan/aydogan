const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: " Moderasyon Komutları",
                  },
                color: 0xD97634,
                description: "**ay!sustur @kullanıcı sebep** \n  Etiketlediğiniz Kişiyi Sunucuda Susturur \n **ay!ban @kullanıcı Sebep**   \n  Etiketlediğiniz Kullanıcıyı banlar  \n **ay!unban @kullanıcı sebep** \n Etiketlediğiniz Kullanıcının Banını Kaldırır \n **ay!kick @kullanıcı Sebep** \n Etiketlediğiniz kullanıcıyı Sunucudan atar \n **ay!duyuru** \n Duyuru Yapmanızı Sağlar \n **ay!sil** Yanına Miktarını Yazınız  \n **ay!oylama**  Oylama Yapılacak İçerik \n **ay!otorol** \n Sunucunuza Gelen Üyelere otomatik rol verir \n **ay!sa-as aç/kapat** \n **ay!slowmode | ay!yavaşmod** \n Yazma Süresini Belirler (En Fazla 10 Saniye) \n **!sunucupanel**    "
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyonkomutları'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Moderasyon Komutlarını Gösterir.',
  usage: 'moderasyon'
};