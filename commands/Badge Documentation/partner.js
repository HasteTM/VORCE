
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "partner",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#3e85eb')
        .setAuthor('Partner Badge', 'https://cdn.discordapp.com/attachments/651589704772485131/740261731145875516/607354319985049625.gif')
        .setDescription('The Partner badge is for those in the Partnership Program. If you’re a content creator or run a very large community server you can apply for this badge.')
        
        message.channel.send(embed);

    }

}