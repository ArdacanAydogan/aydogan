const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`AYDOĞAN BOT`, client.user.avatarURL)
      .setDescription('[Youtube](https://www.youtube.com/channel/UCStHgmzLw0DB9Ckn00_fvTg?view_as=subscriber) | [İnstagram](https://www.instagram.com/ardacanaydogan)  | [Destek Sunucusu](https://discord.gg/NYEHm5Am2G)')
  .setThumbnail(client.user.avatarURL)
      .addField(`AYDOĞAN BOT - Yardım Paneli`, `:white_small_square: | **ay!eğlencekomutları**: 
      <a:alev:783010852961517578> Sunucunuz için Eğlence Komutlarını Gösterir.!\n:white_small_square: | **ay!moderasyonsistemi**  
      <a:alev:783010852961517578> Modlara Özel Komutlar \n:white_small_square: | **ay!yapımcı** 
      <a:alev:783010852961517578> Beni Geliştiren Ve Yapan Kişiler \n:white_small_square: | **ay!aydoğanbotnedir?** 
      <a:alev:783010852961517578> Aydoğan Bot Nedir Niçin Aydoğan ?
     <a:developever:786687264360497162> **Yapımcı**: <@449603871929532418>
     **Sürüm**: V.<a:0_:784832807146487808>.<a:0_:784832807146487808>.<a:1_:784832852138262528>   `)
      .setImage('https://cdn.discordapp.com/attachments/783055798229401660/789070502526058506/standard_2.gif')  
 .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL) 
  return message.channel.sendEmbed(yardım);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
