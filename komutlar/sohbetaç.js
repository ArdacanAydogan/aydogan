const Discord = require('discord.js');
exports.run = (client, message, args) => {

 let every = message.guild.roles.cache.find(r => r.name === '@everyone')
message.channel.createOverwrite(every, {
 'SEND_MESSAGES': null,
 
})
 

 message.channel.send(' <a:mavitik2:803612437479686164> Sohbet kanalı Açıldı ! ');
}
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['aç','a','saç'],
kategori: 'sohbet',
 permLevel: 3
};

exports.help = {
 name: 'sohbet-aç',
 description: 'Sohbetinizi açmaya yarar. Kapatmak için .',
 usage: 'aç'
};