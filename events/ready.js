const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "Yenilendik Ve Geliştirildi",
        "✨Yenilikler İçin ay!yenilikler",
        "ay!eğlence"
       //DBL EKLENCEKSENİZ 5000 EN İYİ DEĞİŞİM SÜRESİDİR! EKLEMEK İSTEMİYORSANIZ İDEAL 2500

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.youtube.com/channel/UCStHgmzLw0DB9Ckn00_fvTg?view_as=subscriber" );
      }, 2 * 5000); //DEĞİŞME SÜRESİ

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  client.user.setActivity(`${prefix}yardım `);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};