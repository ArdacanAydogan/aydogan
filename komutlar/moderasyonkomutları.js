const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "AYDOĞAN BOT - Moderasyon Komutları",
                    icon_url: "https://cdn.discordapp.com/avatars/584513444066099210/b4d55796cdfbfa83abedbd3ddd66414d.png?size=2048"
                  },
                color: 0xD97634,
                description: "<a:discord:796680487912341525> **ay!bansistemi**  Ban Sistemini Gösterir . \n <a:discord:796680487912341525> **ay!sa-as-aç | kapat** \n <a:discord:796680487912341525> **ay!reklam-aç | kapat** \n **ay!duyuru** \n **ay!sil** -sayı- \n **ay!oylama**  Oylama Yapılacak İçerik \n    "
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