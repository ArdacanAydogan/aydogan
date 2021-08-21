const Discord = require('discord.js');


exports.run = function(client, message, args){
 const hayir = '❌';
 const evet = '✅';
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:warn:783102160832430091> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
 const msg = args.join(' ');
 if(!msg) return message.channel.send('**<a:warn:783102160832430091> Oylamam için bir içerik gir !**');
 message.delete({timeout: 5000});
 message.channel.send(new Discord.MessageEmbed() .setTitle('Oylama') .setDescription(msg) .setColor('RANDOM') .setFooter(message.author.tag+' tarafından başlatıldı..',message.author.avatarURL)).then(function(i){
 i.react(evet)
 i.react(hayir)
// evet hayır Şeklinde Sorar 🙂

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
