const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
  client.channels.get('825050394690322432').send(new Discord.RichEmbed().setAuthor("📥Yeni Bir Mesaj Alındı ", client.user.avatarURL).setFooter(message.author.tag, message.author.avatarURL).setDescription(`**Gönderenin ID:** ${message.author.id}`).setTimestamp().addField("Mesaj", message.content).setColor("RANDOM"))
})


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

if(message.content.toLowerCase() === prefix + "deneme") {
	message.react("❤")
	setTimeout(function () {
		},1 * 2000)
	
	
}

})
setInterval(() => {
  client.channels.get("823704213569798174").send('<a:alev_2:786245953531150337> **ARDACAN AYDOĞAN Ailesine Hoşgeldiniz** \n <a:mavitik2:803612437479686164> Emoji Spamı Yapmak yasak ! \n <a:mavitik2:803612437479686164> Küfürlü Argolu Konuşmak yasak ! \n <a:mavitik2:803612437479686164> Trol Yapmak Yasaktır ! \n <a:mavitik2:803612437479686164> Altın Uc Oyun Parası Vb. İstemek satımı yasaktır ! \n <a:mavitik2:803612437479686164> Kavga , Tartışma çıkarmak yasaktır. \n <a:mavitik2:803612437479686164> Yönetimce verilen kararlara veya sisteme karşı çıkılamaz Yasaktır . \n İyi Eğlenceler <#489220596153057280> Kısmını Okumayı Unutmayınız ! ')
  }, 60000)

  setInterval(() => {
    client.channels.get("824356868960026724").send('<a:alev_2:786245953531150337> **SUNUCUMUZA HOŞGELDİNİZ ** \n <a:mavitik2:803612437479686164> Argo Kullanmak Yasak !\n <a:mavitik2:803612437479686164> Küfürlü  Konuşmak yasak ! \n <a:mavitik2:803612437479686164> Reklamın Her Türlüsü Yasak !  \n <a:mavitik2:803612437479686164> Oyun Parası İstemek Yasak !   \n <a:mavitik2:803612437479686164> Kavga , Tartışma çıkarmak yasaktır. \n <a:mavitik2:803612437479686164>  Nitro İstemek Yasak ! \n  <a:mavitik2:803612437479686164> +18 Pp Veya Fotoğraf Paylaşımı Yasaktır ! Ban Sebebidir  \n Önemli Olan Duyurularımızı <#824357052507226152> <Kısmında Paylaşıcaz Takipte Kalmayı Unutmayınız <a:kalp:782274153658712114>')
    }, 60000)

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