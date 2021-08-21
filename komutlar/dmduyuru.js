const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
 const mesaj = args.slice(0).join(' ');
 if(!message.member.roles.cache.has("820516928027754507")) return message.channel.send(`Bu komutu kullanabilmek için \`Kullanacak rol adı\` yetkisine sahip olmasınız.`);
 if(mesaj.length < 1) return message.channel.send(new Discord.MessageEmbed().setDescription(`Herkese mesaj göndere bilmem için önce mesajını yazman lazım.`).setColor('BLACK'));
 try {
 message.guild.members.cache.forEach(member=> {
 member.send(mesaj) 
 }) 
 message.channel.send(new Discord.MessageEmbed().setDescription(`Mesaj başarıyla **` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gönderildi.`).setColor('RANDOM'));
 }
 catch(e) {
 return console.log(`Hata`) 
 } 
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'dmduyuru',
 description: 'DM Duyuru.',
 usage: 'duyuru'
};