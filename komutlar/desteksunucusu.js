const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`AYDOĞAN - Bot`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField("Linkler", `Destek Sunucusu [TIKLA](https://discord.gg/gMqHwKyZu4)`)
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

