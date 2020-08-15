
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "ips",

    description: "returns database info",

    run: (client, message, args) => {

        message.delete();

        if (message.author.id !== "651515978231971900") {
          }


message.channel.send(`Sent Data to DM's!`)
.then(m => m.delete(3000));
    }

}
