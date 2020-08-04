
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "staff",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#7289da')
        .setAuthor('Staff Badge', 'https://cdn.discordapp.com/attachments/651589704772485131/740254018848161862/706444294894125146.gif')
        .setDescription('The Discord Staff badge is only obtainable by people that work at Discord.')
        
        message.channel.send(embed);

    }

}