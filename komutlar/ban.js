const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.inlineReply(" <a:error:783119570092163112> Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    if (!args[0]) {
        return message.inlineReply(`<a:error:783119570092163112> Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!`)
   }
   var sebeb = args.slice(1).join(" ");
   var seyfooo = args[0]
   var now = new Date()
   if (!sebeb) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.inlineReply(`<a:error:783119570092163112> Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.members.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.inlineReply(`<@!${user.id}> adlı kullanıcı banlandı <a:banned:855344997011292230> `);
                   })
                   .catch(error => {
                       message.channel.send(`<a:error:783119570092163112> Bir Hata Oluştu`);
                       console.error('<a:error:783119570092163112> Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.channel.send(`Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> sunucudan yasaklandı <a:ban:613373970984468491>`);
                   })
                   .catch(error => {
                       message.channel.send(` Bir Hata Oluştu`);
                       console.error(' Hata:', error);
                   });
           });
   }
 
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['force-ban', 'ip-ban', 'yasakla'],
   permLevel: 0
 
};
 
exports.help = {
   name: 'ban',
   description: 'Oylama yapmanızı sağlar.',
   usage: 'forceban <id>'
};