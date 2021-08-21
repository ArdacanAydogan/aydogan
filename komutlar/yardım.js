const Discord = require('discord.js');
require("../ExtendedMessage.js");
exports.run = async (client, message, params, args) => {

     
 const yardım = new Discord.MessageEmbed()
 .setColor('ff0000')
 .setAuthor(`AYDOĞAN `, client.user.avatarURL())
 .setDescription('[Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=584513444066099210&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/neFmqvhnZ2) | [Site](https://sites.google.com/view/aydoganbot/ana-sayfa) | [AYDOĞAN DJ](https://discord.com/oauth2/authorize?client_id=777961328471834666&scope=bot&permissions=8)')
 .setThumbnail(client.user.avatarURL) 
 .addField(` <a:ayar2:844452728662655006>  YARDIM MENÜSÜ`, `:white_small_square: | **ay!eğlence**
      <a:alev:783010852961517578> Sunucunuz için Eğlence Komutlarını Gösterir \n:white_small_square: | **ay!moderasyon**  
      <a:alev:783010852961517578> Moderasyon Komutlarını Gösterir \n :white_small_square: | **ay!koruma** 
      <a:alev:783010852961517578> Çok Yakında Sizlerle  \n :white_small_square: | **ay!davet** 
      <a:alev:783010852961517578> Botun Davet Linkini Atar  \n:white_small_square: | **ay!gold-üye**
      <a:alev:783010852961517578> Gold Üye Sistemini Gösterir \n :white_small_square: | **ay!oyver** 
      <a:alev:783010852961517578> Bota Oy vererek Bize destekte Bulunabilirsiniz (Çok yakında) \n :white_small_square: | **ay!yapımcı** 
      <a:alev:783010852961517578> Yapımcı Hakkında Bilgi Verir 
     <a:developever:786687264360497162> **Geliştirici**: <@449603871929532418> 
     **Sürüm**: V.<a:1_:784832852138262528>.<a:0_:784832807146487808>
      **Prefix** :** ____ay!____** `) 
     .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif") 
     .setFooter(`${message.author.username} tarafından Yardım Komutu Kullanıldı !`, message.author.avatarURL()) 
     message.inlineReply(yardım)
     message.delete({timeout: 5000});
  
};



exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [ 'yardım', 'help', 'y', 'h', 'commands'],
 permLevel: 0
 };

 exports.help = {
 name: 'yardım',
 description: 'yardım',
 usage: 'yardım'
 };




