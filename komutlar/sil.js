const Discord = require('discord.js');


exports.run = function(client, message, args) {

 const m = args.join(' ');
 if(!m) return message.channel.send('**> <a:error:783119570092163112> Bir miktar girmelisiniz !**');
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('** <a:error:783119570092163112> Bu işlem için gerekli izne sahip değilsiniz!**');
 if(m < 1) return message.channel.send('** En az 1 mesaj silebilirim !**')
 if(m>500) return message.channel.send('** En fazla 500 mesaj silebilirim !**')
 message.channel.bulkDelete(m);
 

 message.channel.send(
 new Discord.MessageEmbed()
 .setDescription('** '+m+' Mesaj Başarıyla Silindi <a:mavitik2:803612437479686164> **')
 .setColor('#232323')
 ).then(i=>{
 i.react(' 585186945471086620')
 } 
 )
};


exports.conf = {
 enabled: true,//True => Komut açık, False => Komut kapalı 
 guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
 aliases: ['temizle','delete','sil'],//Komutun farklı kullanımları ÖR: !ping, !p
 permLevel: 0 //kimlerin kullanabileceğini (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
 name: 'sil',//Komutun adı (Komutu girerken lazım olucak)
 description: 'Belirlediğiniz miktarda mesaj siler',//Komutun Açıklaması
 category:'yetkili',
 usage: 'sil 100' //komutun kullanım şekli; ÖR: !members.ban @Kullanıcı
}
