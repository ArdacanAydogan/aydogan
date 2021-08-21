const Discord = require("discord.js")
const {MessageEmbed} = require('discord.js');
const client = new Discord.Client()

const moment = require('moment');

exports.run = async (client, msg, args) => {
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setTitle(`Roller [${msg.guild.roles.cache.size}]`)
            .setDescription(`<@&${msg.guild.roles.cache.map(roles => `${roles.id}`).join('>, <@&')}>`)
            return msg.channel.send(embed)
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rols"],
  permLevel: 0
};

exports.help = {
  name: 'roller',
  description: 'rolleri gösterir',
  usage: 'roller'
};