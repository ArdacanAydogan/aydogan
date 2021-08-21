const Discord = require("discord.js");
const client = new(require("discord.js").Client)
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
  if(!message.member.voice.channel) return message.inlineReply('<a:youtube2:853354755174432779> Youtube Komutunu Kullanabilmek için bir ses kanalına girmelisin ! ') 
  
  
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[BURAYA TIKLA !](https://discord.gg/${invite.code}) Bu linke tıklıyarak youtube girebilirsin. \n İyi Eğlenceler `)
                    embed.setThumbnail('https://icon-library.com/images/youtube-small-icon/youtube-small-icon-27.jpg')
                    embed.setColor('RANDOM')
                    embed .setImage ('https://cdn.discordapp.com/attachments/783055798229401660/839582932171096144/standard_1.gif')
                        message.channel.send(embed)
                })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["youtube"],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Ses kanalında youtube ye girmenizi sağlar',
  usage: 'youtube'
};