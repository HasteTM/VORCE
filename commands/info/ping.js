const Discord = require('discord.js');

module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {


      let defaultcolor = `#7dfce9`

      let rederrorcolor = `#F04947`


          let pembed = new Discord.RichEmbed()
          .setColor(defaultcolor)
          .setTitle("🏓 Pong!")
          .setAuthor('Ping')
          .setThumbnail(client.user.displayAvatarURL)
          .addField("**Latency**", `${Math.floor(message.createdTimestamp - message.createdTimestamp)}ms`)
          .addField("**API Latency**", `${Math.round(client.ping)}ms`)
          .setTimestamp()
          .setFooter(`${message.author.username}`, message.author.avatarURL)

          message.channel.send(pembed);
        }
}
