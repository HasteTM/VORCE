const Discord = require("discord.js");
const { version }= require("discord.js");
const moment = require("moment");
module.exports = {

    name: "stats",

    description: "Displays bot information.",

    run: (client, message, args) => {

      let defaultcolor = `#7dfce9`

      let rederrorcolor = `#F04947`

      // const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      function duration(ms) {
          const sec = Math.floor((ms / 1000) % 60).toString()
          const min = Math.floor((ms / (1000 * 60)) % 60).toString()
          const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
          const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
          return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
      }

    const embed = new Discord.RichEmbed()
    .setAuthor('Botstats')
      .setTitle("Vorce Statistics!")
      .setThumbnail(client.user.displayAvatarURL)
      .setDescription(`
        • Mem Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}
        • Websocket: ${Math.round(client.ping)}ms
        • Users: ${client.users.size}
        • Discord.js: v${version}
        • Node: ${process.version}
        • Uptime: ${duration(client.uptime)}
        `)
        .setTimestamp()
        .setColor(defaultcolor)
    message.channel.send(embed);


    }
}
