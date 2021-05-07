const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

client.on("message",msg=>{if (msg.content.includes("<@!684722646830940201>") ) return msg.delete() && msg.reply(`<a:warn:783102160832430091> Bu kullanıcıyı etiketlemek yasaktır. Atarsan Bir daha belanı siker haberin olsun :grin: `)})



client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
  client.channels.get('834828398017642586').send(new Discord.RichEmbed().setAuthor("Yeni Bir DM", client.user.avatarURL).setFooter(message.author.tag, message.author.avatarURL).setDescription(`**Gönderenin ID:** ${message.author.id}`).setTimestamp().addField("Mesaj", message.content).setColor("RANDOM"))
})
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "rolkur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Rolleriniz Oluşturuluyor`)
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" <a:error:783119570092163112> Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
  message.channel.awaitMessages(response => response.content === 'evet', {
  max: 1,
  time: 10000,
  errors: ['time'],
  })
  
  message.guild.createRole({
  name: '👑| Sunucu Sahip',
  color: 'ff0000',
  permissions: [
  "ADMINISTRATOR",
  ]
  })
  
  
  message.guild.createRole({
  name: 'GENEL SORUMLU',
  color: '49efae',
  permissions: [
  "MANAGE_GUILD",
  "MANAGE_ROLES",
  "MUTE_MEMBERS",
  "DEAFEN_MEMBERS",
  "MANAGE_MESSAGES",
  "MANAGE_NICKNAMES",
  "KICK_MEMBERS"
  ]
  })
  
  message.guild.createRole({
  name: '⌚ | Discord Yetkili',
  color: '1536f5',
  permissions: [
  "MANAGE_GUILD",
  "MANAGE_ROLES",
  "MUTE_MEMBERS",
  "DEAFEN_MEMBERS",
  "MANAGE_MESSAGES",
  "MANAGE_NICKNAMES"
  ]
  })
    
    
  message.guild.createRole({
  name: '🔨 | Partner Sorumlusu',
  color: '#FF4D00'
  })
  
  message.guild.createRole({
  name: '💸 | Booster',
  color: '#FF77FF',
  })
    


  message.guild.createRole({
  name: '🌻 | Family',
  color: '#FF8C69',
  })
    
  message.guild.createRole({
  name: '⚜ | Partner',
  color: '#002FA7'
  })
    
  message.guild.createRole({
  name: '🔫 | Tek Tabanca',
  color: '#00CCCC',
  })
    
  message.guild.createRole({
  name: '💖 | Sevgiler',
  color: '#CD00CC',
  })
    
  message.guild.createRole({
  name: '🌸 | Kız',
  color: 'd300ff',
  })
  
  message.guild.createRole({
  name: '👥 | Erkek',
  color: '#0000FF',
  })
  
  message.guild.createRole({
  name: '🤖 | Botlar',
  color: '0006ff',
  })
  
  message.channel.send(" <a:mavitik2:803612437479686164> Rolleriniz Başarılı Bir Şekilde Kurulmuştur ")
  
  
  }
  });
  
client.on("guildCreate", guild => {  // sunucuya eklendim ve atıldım
  let add = client.channels.get("834827187923451954")
  const eklendim = new Discord.RichEmbed()
  
  .setTitle(`Sunucuya Eklendim`)
  .setTimestamp()
  .setColor("GREEN")
  .setThumbnail(guild.iconURL)
  .addField(`Sunucu İsmi`,guild.name)
  .addField(`Sunucu ID`, guild.id)
  .addField(`Kurucu`,guild.owner.user.tag)
  .addField(`Kurucu ID`,guild.owner.user.id)
  .addField(`Üye Sayısı`,guild.memberCount)
  
  add.send(eklendim)
  
  });
  
  client.on("guildDelete", guild => {
  let remove = client.channels.get("834827187923451954")
  const atildim = new Discord.RichEmbed()
  
  .setTitle(`Sunucudan Atıldım`)
  .setTimestamp()
  .setColor("RED")
  .setThumbnail(guild.iconURL)
  .addField(`Sunucu İsmi`,guild.name)
  .addField(`Sunucu ID`, guild.id)
  .addField(`Kurucu`,guild.owner.user.tag)
  .addField(`Kurucu ID`,guild.owner.user.id)
  .addField(`Üye Sayısı`,guild.memberCount)
  
  remove.send(atildim)
  
  });


client.on("message", msg => {
  const kzgn = client.emojis.get("512302904141545509");
  const embedlul = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription( msg.author + " Reklam Yasak Bunu Bilmiyormusun!")

const embedlulz = new Discord.RichEmbed()
  .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
    .setColor(0x00AE86)
    .setDescription("ay!uyar <@kişi> komutu ile onu uyarabilir ya da ay!kick <kişi> veya ay!ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
  .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/) (htpp)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
  if(msg.member.hasPermission('BAN_MEMBERS')){
  return;
  } else {
  msg.delete(30).then(deletedMsg => {
   deletedMsg.channel.send(embedlul)
   msg.guild.owner.send(embedlulz).catch(e => {
          console.error(e);
        });
      }).catch(e => {
        console.error(e);
      });
    };
    };
  })
;

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

var prefix = "!";
client.on("message", message => {

if(message.content.toLowerCase() === prefix + "tr") {
	message.react("🇹🇷")
	setTimeout(function () {
		},1 * 2000)
	
	
}

})


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
		}{
      msg.channel.send('Merhaba Hoşgeldiniz');
		}
	}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
		}{
      msg.reply('Günaydın Hoşgeldin Canım :) :blush: ');
		}
	}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
		}{
      msg.reply('Aleyküm selam, hoş geldin  ');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
					}{
		msg.reply('Aleyküm selam, hoş geldin ');
		}
	}  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
					}{
		msg.reply('İyi Geceler Dostum ');
		}
	}  
});

  
  
  client.on("message", msg => {
    const uyarıembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription(":crown: " + msg.author + "Reklam Yapmayı Kes Seni Yetkililere Söyledim :angry: :rage: ")
  
  const dmembed = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription(" " + msg.author.tag + " Sunucunda Reklam Yapıyor ay!uyar komutu ile kişiyi uyara bilir ay!ban Komutu İle Kişiyi Banlayabilirsin ")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")
  
  if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(uyarıembed)
     msg.guild.owner.send(dmembed).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })

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