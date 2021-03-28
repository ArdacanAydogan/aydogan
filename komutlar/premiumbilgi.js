const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Premium Fiyatları",
                  },
                color: 0xD97634,
                description: "**1 Ay/ 10₺** \n **3 Ay /15₺** \n **6 /Ay 20₺** \n  `Şuanlık Satımlar Yoktur Bilginize!` \n Premium Özellikler İçin **ay!premiumözellikler** Komutunu kullanarak Bakabilirsin \n "
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'premium',
  description: 'Premium sistemini  Gösterir.',
  usage: 'premium'
};