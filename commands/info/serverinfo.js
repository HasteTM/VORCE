const { RichEmbed } = require("discord.js");


module.exports = {

    name: "serverinfo",

    aliases: ["sinfo", "info"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()
// embeds
    .setAuthor('Serverinfo', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
    .setColor("#830000")
    .setThumbnail(message.guild.iconURL)
    .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')
    .addField('Server Owner', message.guild.owner)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

        message.channel.send(embed);

    }

}