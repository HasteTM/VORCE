const Discord = require("discord.js");
module.exports = {

    name: "servericon",

    description: "Returns Bot information",

    run: (client, message, args) => {

        let defaultcolor = `#000000`




        const embed = new Discord.RichEmbed()
            .setColor(defaultcolor)
            .setAuthor('ServerIcon')
            .setImage(message.guild.iconURL)

        message.channel.send(embed);
    }
}