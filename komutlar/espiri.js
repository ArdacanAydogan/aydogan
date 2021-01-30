const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(' Espiri Yükleniyor...  ').then(message => {
   var espriler = [' Örümcek adam ağ atamıyormuş neden? , \n Çünkü Ağ Bağlantısı Kopmuş ' ,'Dört tarafı suyla çevrili çaya ne denir?, \n ADAÇAYI  ' ,'Adamın biri gülmüş \n saksıya koymuşlar.' ,'İneklerin sevmediği element? \n AZ-OT' ,'  Erkek ata ne denir? \n Bayat ' ,'Masada hangi örtü kullanılmaz? \n Bitki Örtüsü.' ,' Bu gece seni kınıyorum \n çünkü kına gecesi.' ,'Top ağlarda \n ben ağlamaz mıyım?' ,'Sen kamyonu al \n Leonardo da vinci.' ,' Dünya dönermiş \n ay da köfte…'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espiri'],
  permLevel: 0
};

exports.help = {
  name: 'Espri',
  description: 'Espri Yapar',
  usage: 'Espri'
};