const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Eğlence Komutları",
                  },
                color: 0xD97634,
                description: "<a:maviyldz:804429330453102603> **ay!aşkölçer @kullanıcı ** \n Birisini Etiketleyerek  Bu komutu kullanabilirsiiz \n <a:maviyldz:804429330453102603> **ay!atasözü** \n Atasözü Söyler \n <a:maviyldz:804429330453102603> **ay!espiri** \n Espiri Atar \n  <a:maviyldz:804429330453102603> **ay!harikasınız** \n Size Kocaman Bir Kalp Atar <3  \n <a:maviyldz:804429330453102603> **ay!hıyar** \n Hıyar verir \n <a:maviyldz:804429330453102603> **ay!stresçarkı** \n Stes Çarkı Çevirirsiniz \n <a:maviyldz:804429330453102603> **ay!slots** \n Slots oyununu oynarsınız \n <a:maviyldz:804429330453102603> **ay!zarat** \n Zar atarsınız \n <a:maviyldz:804429330453102603> **ay!öp @kullanıcı** \n Etiketlediğiniz Kullanıcıyı Öpersiniz \n <a:maviyldz:804429330453102603> **ay!alkış** \n Sizi Alkışlar  "
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