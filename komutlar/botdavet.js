const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`AYDOĞAN`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField("Beni Sunucuna Davet Edebilirsin ", ` [TIKLA]( https://discord.com/oauth2/authorize?client_id=584513444066099210&scope=bot&permissions=8)`)
    .setImage ("https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif") 
    .setFooter(
      `${message.author.username} tarafından istendi. `,
      message.author.avatarURL()
      
    );
  return message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "yardım",
  usage: "yardım"
};
