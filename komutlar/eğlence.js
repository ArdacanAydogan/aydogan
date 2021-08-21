  const Discord = require('discord.js');
  const client = new Discord.Client();
 
  exports.run = (client, message) => {
    message.inlineReply({embed: {
                  author: {
                      name: "EĞLENCE KOMUTLARI",
                    },
                  color: 0xD97634,
                  description: "<a:tac:837356383950602310> **ay!youtube** \n Bu Komutu Kullanabilmek İçin Ses Kanalında Olmalısınız İyi Seyirler \n <a:tac:837356383950602310> **ay!soygunyap**  \n Soygun Yaparsınız Dikkatli Olun Ha ! \n <a:tac:837356383950602310> **ay!fbi** \n Fbi Gifi atar \n <a:tac:837356383950602310> **ay!aşkölçer @kullanıcı ** \n Birisini Etiketleyerek  Bu komutu kullanabilirsiiz \n <a:tac:837356383950602310> **ay!atasözü** \n Atasözü Söyler \n <a:tac:837356383950602310> **ay!espiri** \n Espiri Atar \n  <a:tac:837356383950602310> **ay!sunucuicon** \n Size Bulunduğunuz Sunucunun Resmini Atar  \n <a:tac:837356383950602310> **ay!avatar** \n Avatarınızı atar \n <a:tac:837356383950602310> **ay!stresçarkı** \n Stes Çarkı Çevirirsiniz \n <a:tac:837356383950602310> **ay!zarat** \n Zar atarsınız \n <a:tac:837356383950602310> **ay!öp @kullanıcı** \n Etiketlediğiniz Kullanıcıyı Öpersiniz \n <a:tac:837356383950602310> **ay!alkış** \n <a:alkslamak:867322205808885791> Sizi Alkışlar \n <a:tac:837356383950602310> **ay!wasted** \n Yazınca Bot Sizi Öldürür <:korkunc:867317641638707220> \n <a:tac:837356383950602310> **ay!nemutlutürkümdiyene** \n <a:tr:835150199730208768> Ne Mutlu Türküm Diyene ! \n <a:tac:837356383950602310> **ay!korona** \n Covid-19 Bilgisini verir"
                }});
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['eğlencekomutları'],
    permLevel: 0
  };

  exports.help = {
    name: 'eğlence',
    description: 'Eğlence Komutlarını Gösterir.',
    usage: 'eğlence'
  };