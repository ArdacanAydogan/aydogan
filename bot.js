const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

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

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
setInterval(() => {
  client.channels.get("489220438627581962").send('Yeni Gelen Kullanıcılarımız <#489220596153057280> Kısmını Okumayı Unutmayınız ! ')
  }, 60000)

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

if(message.content.toLowerCase() === prefix + "deneme") {
	message.react("❤")
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
  if (msg.content.toLowerCase() === 'yayın varmı') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
					}{
		msg.reply('Yayın Hakkında bilgimiz yok olduğu Zaman <#489220067876405288> Kanalından Duyurulur ');
		}
	}
  });

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'youtube') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
					}{
		msg.channel.send('https://www.youtube.com/channel/UCStHgmzLw0DB9Ckn00_fvTg?view_as=subscriber');
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