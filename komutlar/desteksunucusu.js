const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`AYDOĞAN`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField("Linkler", `Destek Sunucusu [TIKLA](https://discord.gg/neFmqvhnZ2)\n Bot Davet Linki [TIKLA]( https://discord.com/oauth2/authorize?client_id=584513444066099210&scope=bot&permissions=8)`)
    .setFooter(
      `${message.author.username} tarafından istendi. |`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu"],
  permLevel: 0
};

exports.help = {
  name: "desteksunucu",
  description: "yardım",
  usage: "yardım"
};
