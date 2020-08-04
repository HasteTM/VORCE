
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "hypesquadevents",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()
// need to push new update with rgb theme
        .setColor('#f8a532')
        .setAuthor('HypeSquad Events Badge', 'https://cdn.discordapp.com/attachments/651589704772485131/740251816490565802/bravery.gif')
        .setDescription('The HypeSquad Events badge is for HypeSquad Event Attendees & people who attend local conventions in the name of the HypeSquad.')
        message.channel.send(embed);

    }

}