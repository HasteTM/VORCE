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
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

        message.channel.send(embed);

    }

}