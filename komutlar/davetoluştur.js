exports.run = async (client, message, args) => {
    try {
      let invite = await message.channel.createInvite({
        maxAge: args.age * 60,
        maxUses: args.uses
      });
  
      message.inlineReply(' > <a:mavitik2:803612437479686164> Bu Sunucunun Davet Linkini Kurdum.\n'
        + 'Bu Sunucun Davet Linki : \n' +
        `https://discord.gg/${invite.code}`).catch(e => {
        client.log.error(e);
      });
    }
    catch (e) {
      client.log.error(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['create-link', 'createlink', 'sunucudavet', 'davetkur', 'davetlink', 'davetoluştur', 'davet-link' , 'davet-oluştur'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet-kur',
    description: 'Bulunduğunuz sunucunun davet linkini atar.',
    usage: 'davet-kur'
  };
  