const Discord = require('discord.js');
exports.run = (client, message, args) => {

 let every = message.guild.roles.cache.find(r => r.name === '@everyone')
message.channel.createOverwrite(every, {
 VIEW_CHANNEL: false,
 
})

 message.channel.send('<a:mavitik2:803612437479686164> Sohbet Kanalı Kapatıldı !');
}
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['sohbetkapat'],
kategori: 'sohbet',
 permLevel: 3
};

exports.help = {
 name: 'sohbet-kapat',
 description: 'Sohbetinizi görünmez yapar. Açmak için sohbet-kapat.',
 usage: 'kapat'
};