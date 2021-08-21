const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "GOLD ÜYE BİLGİLENDİRME",
                  },
                color: 0xD97634,
                description: "<a:golduye:844447827572686879> **Gold Üyelere** Özel Komutlar \n <a:golduye:844447827572686879> Destek Sunucumuzda Size Özel Bir Rol Verilir <@&816686854320685076> Rolü Verilir  \n  <a:golduye:844447827572686879> Gold Üyelere Özel Çekilişler Ve Kod Paylaşımları Ve Daha Fazlası Destek Sunucumuzda olacaktır ! \n Destek Sunucusu : https://discord.gg/neFmqvhnZ2   "
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