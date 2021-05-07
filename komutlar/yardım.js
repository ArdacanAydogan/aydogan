const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`AYDOĞAN `, client.user.avatarURL)
      .setDescription('[Botu Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=584513444066099210&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/neFmqvhnZ2) | [Site]()')
  .setThumbnail(client.user.avatarURL)  
  .addField(` Yardım Paneli`, `:white_small_square: | **ay!eğlence**
      <a:alev:783010852961517578> Sunucunuz için Eğlence Komutlarını Gösterir\n:white_small_square: | **ay!moderasyon**  
      <a:alev:783010852961517578> Moderasyon Komutlarını Gösterir \n:white_small_square: | **ay!istatistik** 
      <a:alev:783010852961517578> Botun İstatistik Değerlerinin Tablosunu Gösterir \n:white_small_square: | **ay!kullanıcı-bilgi** 
      <a:alev:783010852961517578> Kullanıcı Bilgilerini Gösterir  \n:white_small_square: | **ay!gold-üye-bilgi**
      <a:alev:783010852961517578> Gold Üye Hakkında Bilgi Verir \n :white_small_square: | **ay!oyver** 
      <a:alev:783010852961517578> Bota Oy vererek Bize destekte Bulunabilirsiniz (Çok yakında) 
     <a:developever:786687264360497162> **Yapımcılar**: <@449603871929532418> <@684722646830940201>
     **Sürüm**: V.<a:0_:784832807146487808>.<a:0_:784832807146487808>.<a:2_:839969832425750549> 
     **Prefix** :** ____ay!____**  `) 
     .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif") 
     .setFooter(`${message.author.username} tarafından Yardım Komutu Kullanıldı !`, message.author.avatarURL) 
  return message.channel.sendEmbed(yardım);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'komutlar', 'command', 'yardım', 'help',  'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
