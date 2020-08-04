
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "status",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()
// need to push new update with rgb theme
        .setColor('#7289da')
        .setAuthor('Status', 'https://cdn.discordapp.com/attachments/651589704772485131/740315620696129676/bots.png')
        .addField('Bot Status', '🌐 Online')
        .addField('VPS status', '🌐 Online')
        .addField('API Status', '✅ Operational')
        message.channel.send(embed);

    }

}