exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %3 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %6 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %9 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %12 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %18 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %20 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %23 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %26 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %29 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %30 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %40 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %50 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %60 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %70 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %73 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %76 Gösteriyor.<a:kalp3:841412484048617533> ",
      "Aşkölçer %79 Gösteriyor.<a:kalp3:841412484048617533> ",
      "Aşkölçer %82 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %85 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %88 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %90 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %91 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %92 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %93 Gösteriyor. <a:kalp3:841412484048617533> ",
      "Aşkölçer %94 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %95 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %96 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %97 Gösteriyor.<a:kalp3:841412484048617533> ",
      "Aşkölçer %98 Gösteriyor.<a:kalp3:841412484048617533> ",
      "Aşkölçer %99 Gösteriyor. <a:kalp3:841412484048617533>",
      "Aşkölçer %100 Gösteriyor. <a:kalp3:841412484048617533> ",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('<a:error:783119570092163112>  Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }