const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "AYDOĞAN BOT - Eğlence Komutları",
                    icon_url: "https://cdn.discordapp.com/avatars/584513444066099210/b4d55796cdfbfa83abedbd3ddd66414d.png?size=2048"
                  },
                color: 0xD97634,
                description: "<a:maviyldz:804429330453102603> **ay!aşkölçer** \n Birisine @Etiket Atarak Bu komutu kullanabilirsiiz \n <a:maviyldz:804429330453102603> **ay!atasözü** \n Atasözü Söyler \n <a:maviyldz:804429330453102603> **ay!espiri** \n Espiri Atar \n  <a:maviyldz:804429330453102603> **ay!harikasınız** \n Size Kocaman Bir Kalp Atar <3  \n <a:maviyldz:804429330453102603> **ay!hıyar** \n Hıyar verir \n <a:maviyldz:804429330453102603> **ay!stresçarkı** \n Stes Çarkı Çevirirsiniz  "
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