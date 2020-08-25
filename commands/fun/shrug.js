const { RichEmbed } = require("discord.js");


module.exports = {

    name: "shrug",

    description: "format",

    run: (client, message, args) => {

        message.channel.send(":man_shrugging:")


    }

}
