const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  //forumgamer
  const mb = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setFooter(`AYDOĞAN`)
    .setTimestamp();

  const emb = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setFooter(`AYDOĞAN`)
    .setTimestamp();

  if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.channel.send(
      mb.setDescripton(`<a:error:783119570092163112> Bu komutu kullanabilmek için yetkiniz yetersiz.`)
    );

  let forumgamer = message.mentions.users.first();
  if (!args[0])
    return message.channel.send(
      mb.setDescription(`Bir kişiyi etiketlemelisin.`)
    );
  if (!forumgamer)
    return message.channel.send(
      mb.setDescription(`**${args[0]}**, kişisini sunucuda bulamıyorum.`)
    );
  if (
    message.guild.members.get(forumgamer.id).highestRole.calculatedPosition >
    message.member.highestRole.calculatedPosition
  )
    return message.channel.send(
      mb.setDescription(
        `<a:error:783119570092163112> Bu kişinin rolü/rolleri, senin rolün/rollerinden daha yüksek.`
      )
    );
  if (!message.guild.members.get(forumgamer.id).voiceChannel)
    return message.channel.send(
      mb.setDescription(`<a:error:783119570092163112> Bu kullanıcı seslide değil.`)
    );
  if (!args[1])
    return message.channel.send(
      mb.setDescription(`Ne kadar süre susturacağımı belirtmelisin.`)
    );
  let süre = args[1];

  let sebep1 = args.join(" ").slice(args[1].length + args[0].length + 1);
  let sebep = sebep1 ? sebep1 : "Bir sebep girilmemiş.";

  message.guild.members
    .get(forumgamer.id)
    .setMute(true)
    .then(() =>
      message.channel.send(
        mb
          .setDescription(`Birisi ses kanalı üzerinden susturuldu!`)
          .addField(`İşlemi yapan:`, message.author, true)
          .addField(`İşlem yapılan:`, forumgamer.tag, true)
          .addField(
            `Süre:`,
            süre
              .replace(/d/, " gün")
              .replace(/s/, " saniye")
              .replace(/m/, " dakika")
              .replace(/h/, " saat"),
            true
          )
          .addField(`Sebep:`, sebep)
      )
    );
  setTimeout(async () => {
    message.guild.members
      .get(forumgamer.id)
      .setMute(false)
      .then(() =>
        message.channel.send(
          emb
            .setDescription(`Susturulma süresi bitti:`)
            .addField(`İşlemi yapan:`, message.author, true)
            .addField(`İşlem yapılan:`, forumgamer.tag, true)
            .addField(
              `Süre:`,
              süre
                .replace(/d/, " gün")
                .replace(/s/, " saniye")
                .replace(/m/, " dakika")
                .replace(/h/, " saat"),
              true
            )
            .addField(`Sebep:`, sebep)
        )
      );
  }, ms(süre));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ss"],
  permLevel: 0
};

exports.help = {
  name: "ses-mute"
};