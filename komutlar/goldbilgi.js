const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "GOLD ÜYE BİLGİLENDİRME",
                  },
                color: 0xD97634,
                description: "<a:sagdan:829452965307351050> **Gold Üyelere** Özel Komutlar \n <a:sagdan:829452965307351050> Destek Sunucumuzda Size Özel Bir Rol Verilir @Gold Üye  Rolü Verilir  \n  <a:sagdan:829452965307351050> Gold Üyelere Özel Çekilişler Ve Kod Paylaşımları Ve Daha Fazlası Destek Sunucumuzda olacaktır ! Destek Sunucusu : https://discord.gg/neFmqvhnZ2   "
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'gold-üye-bilgi',
  description: 'Gold üye hakkında bilgi verir',
  usage: 'gold-üye-bilgi'
};