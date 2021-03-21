const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`AYDOĞAN `, client.user.avatarURL)
      .setDescription('[Botu Sunucuya Ekle](https://discord.com/oauth2/authorize?client_id=584513444066099210&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/XuGAk2cw) | [Site]()')
  .setThumbnail(client.user.avatarURL)  
  .addField(` Yardım Paneli`, `:white_small_square: | **ay!eğlence**
      <a:alev:783010852961517578> Sunucunuz için Eğlence Komutlarını Gösterir\n:white_small_square: | **ay!moderasyon**  
      <a:alev:783010852961517578> Moderasyon Komutlarını Gösterir \n:white_small_square: | **ay!istatistik** 
      <a:alev:783010852961517578> Botun İstatistik Değerlerinin Tablosunu Gösterir \n:white_small_square: | **ay!botbilgi** 
      <a:alev:783010852961517578> Bot Hakkında Özelinize Bilgiler Gönderir  \n:white_small_square: | **ay!premium**
      <a:alev:783010852961517578> Premium Özelliklerini Gösterir <@782538559973621790> Botuna Sahip Olabilirler 
     <a:developever:786687264360497162> **Yapımcı**: <@449603871929532418>
     **Sürüm**: V.<a:0_:784832807146487808>.<a:0_:784832807146487808>.<a:1_:784832852138262528> 
     **Prefix** :** ____ay!____**  `) 
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
