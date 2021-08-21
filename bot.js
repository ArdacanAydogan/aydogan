const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);


client.on('guildCreate', guild => {

  let kanal = guild.channels.cache.filter(c => c.type === "text").random()

  kanal.send(new Discord.MessageEmbed().setTitle("Beni eklediğiniz için teşekkürler ! Aydoğan Ailesi :heart:").setDescription(`Prefix: ay! [Destek Sunucumuz]( https://discord.gg/neFmqvhnZ2)`));

});//Xir developer team
client.on('message', async (msg, member, guild) => {
  let DB = require('quick.db')
  let OtoCevap = await DB.fetch(`otocevap_${msg.guild.id}`)
  if(OtoCevap === 'açık') {
  
  const OtoCevapSelam = new Discord.MessageEmbed()
  .setColor('#000096')
  .setDescription(`**Aleyküm Selam, Hoşgeldin ${msg.author}**`)
  
  if (msg.content.toLowerCase() === 'sa') { 
  msg.channel.send(OtoCevapSelam).then
  }
  if (msg.content.toLowerCase() === 'slm') { 
  msg.channel.send(OtoCevapSelam).then
  }
  if (msg.content.toLowerCase() === 'selam') { 
  msg.channel.send(OtoCevapSelam).then
  }
  if (msg.content.toLowerCase() === 'sea') { 
  msg.channel.send(OtoCevapSelam).then
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') { 
  msg.channel.send(OtoCevapSelam).then
  
  }
  if (msg.content.toLowerCase() === 'selamın aleyküm') { 
  msg.channel.send(OtoCevapSelam).then
  }
    
    const OtoCevapHalhatır = new Discord.MessageEmbed()
      .setColor('#000096')
      .setDescription(`**İyiyiz, sen nasılsın ${msg.author} ?**`)
    
    if (msg.content.toLowerCase() === 'naber') {
      msg.channel.send(OtoCevapHalhatır).then
    }
    if (msg.content.toLowerCase() === 'nbr') {
      msg.channel.send(OtoCevapHalhatır).then
    }
    if (msg.content.toLowerCase() === 'nasılsınız') {
      msg.channel.send(OtoCevapHalhatır).then
    }
    if (msg.content.toLowerCase() === 'naptı') {
      msg.channel.send(OtoCevapHalhatır).then
    }
    const OtoCevapGünaydın = new Discord.MessageEmbed()
    .setColor('#000096')
    .setDescription(`**${msg.author} Günaydın Hoşgeldin !**`)
  
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.channel.send(OtoCevapGünaydın).then
  }
  if (msg.content.toLowerCase() === 'günaymış') {
    msg.channel.send(OtoCevapGünaydın).then
  }

    const OtoCevapVeda = new Discord.MessageEmbed()
      .setColor('#000096')
      .setDescription(`**Hoşçakal ${msg.author}!**`)
    
    if (msg.content.toLowerCase() === 'görüşürüz') {
      msg.channel.send(OtoCevapVeda).then
    }
    if (msg.content.toLowerCase() === 'bb') {
      msg.channel.send(OtoCevapVeda).then
    }
    if (msg.content.toLowerCase() === 'bye') {
      msg.channel.send(OtoCevapVeda).then
    }
    if (msg.content.toLowerCase() === 'bye bye') {
      msg.channel.send(OtoCevapVeda).then
    }
    if (msg.content.toLowerCase() === 'bay') {
      msg.channel.send(OtoCevapVeda).then
    }
    if (msg.content.toLowerCase() === 'bay bay') {
      msg.channel.send(OtoCevapVeda).then
    }
    if (msg.content.toLowerCase() === 'baybay') {
      msg.channel.send(OtoCevapVeda).then
    }
    if (msg.content.toLowerCase() === 'güle güle') {
      msg.channel.send(OtoCevapVeda).then
    }
    
    if (msg.content.toLowerCase() === `aydogan`) { //Botu etiketleyince mesaj atar
      msg.channel.send('Efendim knk')
    }
  
    if (msg.content.toLowerCase() === 'yok bişi') {
      msg.inlineReply('LA SEN BENİMLE DALGA MI GEÇİYON')
    
    }
    if (msg.content.toLowerCase() === 'yok bişey') {
      msg.inlineReply('LA SEN BENİMLE DALGA MI GEÇİYON')
    }
    if (msg.content.toLowerCase() === `aydoğan`) { //Botu etiketleyince mesaj atar
      msg.inlineReply('Ha söyle knk')
    }
    if (msg.content.toLowerCase() === `ağla`) { //Botu etiketleyince mesaj atar
      msg.inlineReply('Sen Ağla ahahahahaha')
    }
    if (msg.content.toLowerCase() === `he`) { //Botu etiketleyince mesaj atar
      msg.inlineReply('Seni Sikerem hağ ')
    }
    if (msg.content.toLowerCase() === `evet`) { //Botu etiketleyince mesaj atar
      msg.inlineReply('Yaw Git öte he :angry: ')
    }
  }
})

client.on("message",msg=>{if (msg.content.includes("<@!534737944238358530>") ) return msg.delete() && msg.reply(`<a:warn:783102160832430091> Bu kullanıcıyı etiketlemek yasaktır. Atarsan Bir daha belanı siker haberin olsun :grin: `)})

client.on("message",message=>{
  if(message.content==`<@!${client.user.id}>`) return message.channel.send(`> Prefixim : **ay!**`);
})



client.on("guildDelete", (guild)=>{
  const koruma = ["Yok","Düşük","Orta","Yüksek"]
  const embed = new Discord.MessageEmbed()
  .setTitle('Atıldım :(')
  .addField("Sunucu isim",guild.name)
  .addField("Sunucu Üye Sayısı",guild.memberCount)
  .addField("Sunucu Sahibi ID", guild.ownerID)
  .addField("Sunucu Kanal Sayısı",guild.channels.cache.size)
  .addField("Sunucu Kategori Sayısı",guild.channels.cache.filter(z => z.type === "category").size)
  .addField("Sunucu Rol Sayısı",guild.roles.cache.size)
  .addField("Sunucu Koruma Level",guild.verificationLevel)
  .addField("Sunucu Url",guild.vanityURLCode ? guild.vanityURLCode : "Bulunamadı")
  .setColor('RED')
  .setTimestamp()
  .setFooter(client.user.username , client.user.avatarURL())
  client.channels.cache.get("834827187923451954").send(embed)
})


client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
  client.channels.cache.get('834828398017642586').send(new Discord.MessageEmbed().setAuthor("Yeni Bir DM", client.user.avatarURL).setFooter(message.author.tag, message.author.avatarURL).setDescription(`**Gönderenin ID:** ${message.author.id}`).setTimestamp().addField("Mesaj", message.content).setColor("RANDOM"))
 })
 client.ws.on('INTERACTION_CREATE', async interaction => {
       client.api.interactions(interaction.id, interaction.token).callback.post({
              data: {
                  type: 4,
                  data: {
                      content: "Bildirim Ayarı Güncellendi !", // Yardım Menüsü Buraya Gelecek
                      flags: "64" // Bunu Ellemeyin
                    }
                }
            })
       });
    


client.on("guildMemberAdd", async member => {
  let sayac = db.get(`sayac.${member.guild.id}`);
  if (!sayac) return;
  let kanal = client.channels.get(sayac.kanal);
  if (!kanal) return db.delete(`sayac.${member.guild.id}`);
  kanal.send(`${member.user.tag} sunucuya katıldı! Sunucu şu an **${member.guild.memberCount}** kişi. **${sayac.sayi}** kişi olmamıza **${sayac.sayi - member.guild.memberCount}** kişi kaldı!`);
  
  if (member.guild.memberCount >= sayac.sayi) {
    kanal.send(`Sunucu, sayaç hedefine ulaştı!`);
    db.delete(`sayac.${member.guild.id}`);
  };
});

client.on("guildMemberRemove", async member => {
  let sayac = db.get(`sayac.${member.guild.id}`);
  if (!sayac) return;
  let kanal = client.channels.get(sayac.kanal);
  if (!kanal) return db.delete(`sayac.${member.guild.id}`);
  kanal.send(`${member.user.tag} sunucudan ayrıldı! Sunucu şu an **${member.guild.memberCount}** kişi. **${sayac.sayi}** kişi olmamıza **${sayac.sayi - member.guild.memberCount}** kişi kaldı!`);
});
    
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on("channelCreate", async (channel, member, guild) => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (kanal == "acik") {
    channel.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir kanal oluşturuludu! fakat geri silindi! ( Kanal Koruma Sistemi) "
      )
      .setColor("BLACK");
    channel.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});

var prefix = "!";
client.on("message", message => {

if(message.content.toLowerCase() === prefix + "tr") {
	message.react("🇹🇷")
	setTimeout(function () {
		},1 * 2000)
	
	
}

})


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kullanma') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
		}{
      msg.channel.send('Merhaba Hoşgeldiniz');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kullanılmıyor2...')
   {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
		}{
      msg.inlineReply('Günaydın Hoşgeldin Canım :) :blush: ');
		}
	}
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kullanılmıyor..') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
					}{
		('Aleyküm selam, hoş geldin ');
		}
	}  
});


  
  
   
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);