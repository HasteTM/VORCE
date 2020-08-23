
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "bughunter",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#43b581')
        .setAuthor('Bug Hunter Badge', 'https://cdn.discordapp.com/attachments/651589704772485131/740265896970551377/BugHunter.png')
        .setDescription('The Bug Hunter badge is awarded to the most hard-working of those in the Bug Hunter community.')
        
        message.channel.send(embed);

    }

}