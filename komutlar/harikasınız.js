const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} O Sizin Harikalığınız <a:kalp:782274153658712114> `,
            image: {
                url: "https://media.tenor.com/images/752063d293a04a2ce7ac64b8f983e4d2/tenor.gif"
            }
        }
    });
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'harikasın', 
  description: 'O sizin güzelliğiniz der .',
  usage: 'harika'
};
