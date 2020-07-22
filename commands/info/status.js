
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "status",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()
// need to push new update with rgb theme
        .setColor('#01000a')
        .setAuthor('Status', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .addField('Bot Status', '🌐 Online')
        .addField('VPS status', '🌐 Online')
        .addField('API Status', '✅ Operational')
        message.channel.send(embed);

    }

}