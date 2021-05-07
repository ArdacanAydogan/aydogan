const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Güncelleme Duyurusu Atmam İçin Birşey Yazmalısın! **Yapımcım**');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('GÜNCELLEME NOTLARI ')
    .setColor('1536f5')
    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
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