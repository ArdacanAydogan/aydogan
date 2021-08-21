const discord = require('discord.js')
require("../ExtendedMessage.js");
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let avatar = user.displayAvatarURL()

    const embed = new discord.MessageEmbed()
    .setTitle(`${user.tag} - Avatarın`)
    .setURL(avatar)
    .setImage(avatar)
    .setColor('RANDOM')
    message.inlineReply(embed)
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['pp'],
  permLevel: 0
};

exports.help = {
  name: 'avatar'
};
