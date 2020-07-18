
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "status",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#01000a')
        .setAuthor('Status', 'https://cdn.discordapp.com/attachments/721260118360195093/721750809439764570/63767-200.png')
        .setDescription('BOT is currently Online')

        message.channel.send(embed);

    }

}