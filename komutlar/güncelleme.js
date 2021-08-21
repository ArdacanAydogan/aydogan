const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const yetki = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Bu Özel Komutdur ! `);
    if (message.author.id !== "797551871761580042")
      return message.channel.send(yetki);

 let mesaj = args.slice(0).join(' ');
 if (mesaj.length < 1) return message.reply('Güncelleme Duyurusu Atmam İçin Birşey Yazmalısın! **Yapımcım**');
 message.delete({timeout: 5000});
 const embed = new Discord.MessageEmbed()
 .setAuthor('GÜNCELLEME NOTLARI ')
 .setColor('1536f5')
 .setDescription(`${mesaj}`)
 return message.channel.send(embed);
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['güncel'],
 permLevel: 2
};

exports.help = {
 name: 'güncellemeduyurusu',
 description: 'Güzel Bir Duyuru Görünümü Sağlar.',
 usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
