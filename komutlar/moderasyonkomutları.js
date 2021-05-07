const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: " MODERASYON KOMUTLARI",
                  },
                color: 0xFFFF00,
                description: "<a:banned:782272236521652274> **ay!sustur @kullanıcı sebep** \n  Etiketlediğiniz Kişiyi Sunucuda Susturur \n <a:banned:782272236521652274> **ay!ban @kullanıcı Sebep**   \n  Etiketlediğiniz Kullanıcıyı banlar  \n <a:banned:782272236521652274> **ay!unban @kullanıcı sebep** \n Etiketlediğiniz Kullanıcının Banını Kaldırır \n <a:banned:782272236521652274> **ay!kick @kullanıcı Sebep** \n Etiketlediğiniz kullanıcıyı Sunucudan atar \n <a:banned:782272236521652274> **ay!duyuru** \n Duyuru Yapmanızı Sağlar \n <a:banned:782272236521652274> **ay!sil** \n 500 'e Kadar Mesaj silebilirsiniz  \n <a:banned:782272236521652274> **ay!oylama** \n Oylama yaparsınız \n <a:banned:782272236521652274> **ay!otorol** \n Sunucunuza Gelen Üyelere otomatik rol verir \n <a:banned:782272236521652274> **ay!sa-as aç/kapat** \n <a:banned:782272236521652274> **ay!slowmode | ay!yavaşmod** \n Yazma Süresini Belirler (En Fazla 10 Saniye) \n <a:banned:782272236521652274> **!sunucupanel** \n <a:banned:782272236521652274> \n <a:banned:782272236521652274>  **!rolkur** \n Sunucunuda Bu Komutu yazarsanız Yeni Roller Oluşturacaktır  **ay!davet-kur** \n Sunucunuzun Davet Linkini Atar \n <a:banned:782272236521652274> **ay!reklam-taraması** \n Üyelerin Durumunda Reklam vb. Tespitini yapar \n <a:banned:782272236521652274> **ay!emojiyükle** <link> - <isim> \n Bu komutu yazıp yanına linkini eklemeyi ve adını yazmayı unutmayınız ! \n <a:banned:782272236521652274> **ay!odaya-çek** @kullanıcı \n Etiketlediğiniz Kullanıcıyı Odanıza Çekersiniz \n <a:banned:782272236521652274> **ay!ses-mute** @kullanıcı Süre Sebep \n Etiketlediğiniz Kullanıcı Eğer Sesteyse Süreli Mute Atar ( 1d 1 Gün , 1s 1 saniye , 1m 1 Dakika , 1h 1 Saat) "
              
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