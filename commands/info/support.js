
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "support",

    description: "Returns Bot Support Server",

    run: (client, message, args) => {

        const embed = new RichEmbed()
// need to push new update with rgb theme
        .setColor('#102445')
        .setAuthor('Support', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setURL('https://discord.gg/Drps7he')
        .setTitle('Join Server here')
        .setDescription('Are you confused about how to use the bot or want to ask a question? Join the Support Server, and we can help you out!')

        message.channel.send(embed);

    }

}