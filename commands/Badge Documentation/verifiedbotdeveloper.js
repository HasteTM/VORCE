
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "vbdeveloper",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#3e85eb')
        .setAuthor('Verified Bot Developer', 'https://cdn.discordapp.com/attachments/651589704772485131/740265818385809438/ezgif.com-webp-to-png2.png')
        .setDescription('The Verified Bot Developer badge is for those that have completed the Verification process and have been accepted into the Verified Bot Developer Program.')
        
        message.channel.send(embed);

    }

}