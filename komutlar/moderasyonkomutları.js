const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.inlineReply({embed: {
                author: {
                    name: "MODERASYON KOMUTLARI",
                  },
                color: 0xFFFF00,
                description: "**ay!sustur @kullanıcı sebep** \n  Etiketlediğiniz Kişiyi Sunucuda Susturur \n  **ay!ban @kullanıcı Sebep**   \n  Etiketlediğiniz Kullanıcıyı banlar  \n **ay!unban @kullanıcı sebep** \n Etiketlediğiniz Kullanıcının Banını Kaldırır \n  **ay!kick @kullanıcı Sebep** \n Etiketlediğiniz kullanıcıyı Sunucudan atar \n  **ay!duyuru** \n Duyuru Yapmanızı Sağlar \n  **ay!sil** \n 500 'e Kadar Mesaj silebilirsiniz  \n **ay!oylama** \n Oylama yaparsınız \n **ay!otorol** \n Sunucunuza Gelen Üyelere otomatik rol sistemini ayarlarsınız  \n **ay!oto-cevap aç/kapat** \n Oto-Cevap Sistemini ayarlarsınız \n  **ay!slowmode | ay!yavaşmod** \n Yazma Süresini Belirler  \n  **ay!sunucu-panel** \n Sunucunuza Panel Sistemini Kurar   \n  **ay!reklam-taraması** \n Üyelerin Durumunda Reklam vb. Tespitini yapar \n **ay!emojiyükle** <link> - <isim> \n Bu komutu yazıp yanına linkini eklemeyi ve adını yazmayı unutmayınız ! \n  **ay!odaya-çek** @kullanıcı \n Etiketlediğiniz Kullanıcıyı Odanıza Çekersiniz \n **ay!ses-mute** @kullanıcı Süre Sebep \n Etiketlediğiniz Kullanıcı Eğer Sesteyse Süreli Mute Atar ( 1d 1 Gün , 1s 1 saniye , 1m 1 Dakika , 1h 1 Saat) "
              
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