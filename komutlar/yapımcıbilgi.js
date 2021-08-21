const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.delete({timeout: 5000});
  message.channel.send({embed: {
                author: {
                    name: "KİM BU YAPIMCI ? ",
                  },
                color: 0xFFFF00,
                description: "<a:developever:786687264360497162> Yapımcım : <@449603871929532418> \n 9 Haziran 2019 gibi temellerim Atılarak Bu Projeye Dahil Edilmişim \n Yapımcım İse beni geliştirmeye devam ediyor ve Diğer proje Olan **Aydoğan Djyi**  \n **YAPIMCIMIN SOSYAL MEDYA HESAPLARI** \n <a:instagram:782353750761013249> https://www.instagram.com/ardacanaydogan/ \n <:twitter:820049968974397461> https://twitter.com/ArdacanAydogan \n <a:discord:796680487912341525>  https://discord.gg/MF398WA2bJ \n  <a:isaret:847760846305492992>aydoğanailesi" ,
                Image : "https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyonkomutları'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcıbilgi',
  description: 'Moderasyon Komutlarını Gösterir.',
  usage: 'yapımcıbilgi'
};