const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const db = require('quick.db');
const Jimp = require('jimp')
 //furtake
exports.run = (client, message, args) => {
   if(message.author.id !== "449603871929532418") return message.channel.send(":no_entry:  Bu Sahibimin Komutu");
    try {
      var code = args.join(" ");
      var evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      let Embed = new Discord.MessageEmbed()
                            .addField("Giriş","```js\n" + code + "```")
                            .setDescription("```js\n" + clean(evaled) + "```")
if (Embed.description.length >= 2048)
      Embed.description = Embed.description.substr(0, 2042) + "```...";
    return message.channel.send(Embed)
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};