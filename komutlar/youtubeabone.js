const fetch = require("node-superfetch"); 
const Discord = require("discord.js");

const config = "AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI"





      exports.run = async (client, message, args) => {





    let name = "**Ardacan Aydoğan**"



      if (!name) return console.log("!!! Kanal bulunamadı, yeniden dene. !!!");

      const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI&maxResults=1&type=channel`)
      .catch(() => console.log("!!! Kanal bulunamadı, yeniden dene. !!!"));
  
      if (!channel.body.items[0]) return console.log("!!! Kanal bulunamadı, yeniden dene. !!!");
  
      const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI`)
      .catch(() => message.channel.send("Bilinmeyen kanal data hatası"));
  

      message.inlineReply(name + "YouTube`" + parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString() + "` Aboneye ulaştı")
  

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'abone',
    description: '',
    usage: ''
  };