const { RichEmbed } = require("discord.js");


module.exports = {

    name: "serverinfo",

    aliases: ["sinfo", "info"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

    .setDescription("Server Information")
    .setColor("#01000a")
    .setThumbnail(message.guild.iconURL)
    .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

        message.channel.send(embed);

    }

}