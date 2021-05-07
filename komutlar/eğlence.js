const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "EĞLENCE KOMUTLARI",
                  },
                color: 0xD97634,
                description: "<a:tac:837356383950602310> **ay!aşkölçer @kullanıcı ** \n Birisini Etiketleyerek  Bu komutu kullanabilirsiiz \n <a:tac:837356383950602310> **ay!atasözü** \n Atasözü Söyler \n <a:tac:837356383950602310> **ay!espiri** \n Espiri Atar \n  <a:tac:837356383950602310> **ay!harikasınız** \n Size Kocaman Bir Kalp Atar <3  \n <a:tac:837356383950602310> **ay!avatar** \n Avatarınızı atar \n <a:tac:837356383950602310> **ay!stresçarkı** \n Stes Çarkı Çevirirsiniz \n <a:tac:837356383950602310> **ay!slots** \n Slots oyununu oynarsınız \n <a:tac:837356383950602310> **ay!zarat** \n Zar atarsınız \n <a:tac:837356383950602310> **ay!öp @kullanıcı** \n Etiketlediğiniz Kullanıcıyı Öpersiniz \n <a:tac:837356383950602310> **ay!alkış** \n Sizi Alkışlar  "
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence Komutlarını Gösterir.',
  usage: 'eğlence'
};