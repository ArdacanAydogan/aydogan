const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`AYDOĞAN BOT`, client.user.avatarURL)
      .setDescription('[Destek Sunucusu](https://discord.gg/NYEHm5Am2G)')
  .setThumbnail(client.user.avatarURL)
      .addField(`AYDOĞAN BOT - <a:ayarlar:805523328420675605> AYARLAR `, `:white_small_square: | **ay!linkengel**: <:kapal:805510605535707156> 
\n:white_small_square: | **ay!reklamkoruma** <:kapal:805510605535707156>
 \n:white_small_square: | **ay!capskoruma** <:kapal:805510605535707156> 
\n:white_small_square: | **ay!eğlencekomutları** <:ack:805510605062406145> 
\n:white_small_square: | **ay!moderasyonkomutları** <:ack:805510605062406145>
     <a:developever:786687264360497162> **Yapımcı**: <@449603871929532418>
     **Sürüm**: V.<a:0_:784832807146487808>.<a:0_:784832807146487808>.<a:1_:784832852138262528>   `)
      .setImage('https://cdn.discordapp.com/attachments/783055798229401660/789070502526058506/standard_2.gif')  
 .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL) 
  return message.channel.sendEmbed(yardım);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ayar'],
    permLevel: 0
  };

  exports.help = {
    name: 'ayarlar',
    description: 'ayarlar',
    usage: 'ayarlar'
  };
