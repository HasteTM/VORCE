const { RichEmbed } = require("discord.js");


module.exports = {

    name: "guilds",

    description: "Shows many servers the bot is currently in.",

    run: (client, message, args) => {

        const embed = new RichEmbed()
        .setColor('#8e2430')
        .setAuthor('Guilds', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setDescription(`**${client.user.username} Bot is currently in __${client.guilds.size}__ servers!**`)
        message.channel.send(embed);

    }

}
