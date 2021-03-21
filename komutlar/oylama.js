const Discord = require('discord.js');
/*
© 2018-2019
Tüm hakları saklıdır
İzinsiz Kopyalanamaz veya değiştirelemez
Terbiyesizamauslu#1438 tarafından geliştirilmiştir.


*/
exports.run = function(client, message, args){
  const hayir = '❌';
  const evet  =  '✅';
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':warning: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  const msg = args.join(' ');
  if(!msg) return message.channel.send('**Oylamam için bir şey gir!**');
  message.react('🆗');
  message.channel.send(new Discord.RichEmbed() .setTitle('Oylama') .setDescription(msg) .setColor('RANDOM') .setFooter(message.author.tag+' tarafından başlatıldı..',message.author.avatarURL)).then(function(i){
      i.react(evet)
      i.react(hayir)
// evet hayır Şeklinde Sorar :)

  });

}

exports.conf = {
 enabled:true,
  guildOnly:false,
  aliases:['oyla'],
  permLevel:0

}
exports.help = {
  name:'oylama',
  description:'İstediğiniz şeyi oylar',
  category:'kullanıcı',
  usage:'oylama [İçerik]'

}
