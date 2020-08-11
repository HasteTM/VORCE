
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "ips",

    description: "returns database info",

    run: (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission("ADMINISTRATOR")) {
          }


message.channel.send(`Sent Data to DM's!`)
.then(m => m.delete(3000));
    }

}
