
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "status",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()
// need to push new update with rgb theme
        .setColor('#7289da')
        .setAuthor('Status', 'https://cdn.discordapp.com/attachments/664927615034982410/740330612375945326/bots.png')
        .addField('Bot Status', '🌐 Online')
        .addField('VPS status', '🌐 Online')
        .addField('API Status', '✅ Operational')
        message.channel.send(embed);

    }

}