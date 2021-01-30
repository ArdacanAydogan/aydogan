  const Discord = require('discord.js');

  exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    let embed = new Discord.RichEmbed()
  if (mesaj.length < 1) return message.reply('Duyurmam için herhangi bir şey yazmalısın.');  
    message.delete();
    message.channel.send(mesaj);
    
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say', 'söyle'],
    permLevel: 0
  };

  exports.help = {
    name: 'duyur',
    description: 'İstediğiniz şeyi bota yazdırır.',
    usage: 'duyur [yazdırmak istediğiniz şey]'
  };
