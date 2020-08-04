const Discord = require('discord.js');

module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

          const msg = await message.channel.send(`🏓 Pinging....`);
          let pembed = new Discord.RichEmbed()
          .setColor('#7289da')
          .setTitle("🏓 Pong!")
          .setAuthor('Ping', 'https://cdn.discordapp.com/attachments/651589704772485131/740317708553551922/bilgi.png')
          .setThumbnail(client.user.displayAvatarURL)
          .addField("**Latency**", `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`)
          .addField("**API Latency**", `${Math.round(client.ping)}ms`)
          .setTimestamp()
          .setFooter(`${message.author.username}`, message.author.avatarURL)

          msg.edit(pembed);
        }
}
