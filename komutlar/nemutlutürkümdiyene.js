const Discord = require('discord.js')

exports.run = (client, message, args) => { 
 if ( message.react('🇹🇷')) {
 var gif = [
 'https://media.giphy.com/media/yDm4Ry6XU77Py/giphy.gif', 'https://media1.tenor.com/images/6052fceee3bab1c98cde4e590c8be111/tenor.gif?itemid=11841187', 'https://media.tenor.com/images/a607e013adc87fc3a792cf1876b79800/tenor.gif', 'https://media.tenor.com/images/31c9000ffd5dcbc7337ada12d23eaac2/tenor.gif', 'https://media1.tenor.com/images/dbe865a1d72910f0a4e26211ffda5e5c/tenor.gif?itemid=12498400',];

 var gifler = gif[Math.floor(Math.random() * gif.length)];
 }
 
 if (message.react('🇹🇷')) {
 const op = new Discord.MessageEmbed()
 .setDescription(`<a:tr:835150199730208768> **NE MUTLU TÜRKÜM DİYENE !** `)
 .setColor('RED')
 .setImage(gifler)
 .setFooter(`Muhtaç olduğun kudret, damarlarındaki asil kanda mevcuttur . \n Ne Mutlu Türküm Diyene !! `)
 return message.channel.send(op)
 }
 
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['nemutlutürkümdiyene'],
 permLevel: 0
};

exports.help = {
 name: 'türk',
 description: 'Türk bayrağı gönderir.',
 usage: 'türk'
};
