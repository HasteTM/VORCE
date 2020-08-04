const { RichEmbed } = require("discord.js");


module.exports = {

    name: "guilds",

    description: "Shows many servers the bot is currently in.",

    run: (client, message, args) => {

        const embed = new RichEmbed()
        .setColor('#7289da')
        .setAuthor('Guilds', 'https://cdn.discordapp.com/attachments/664927615034982410/740330612375945326/bots.png')
        .setDescription(`**${client.user.username} Bot is currently in __${client.guilds.size}__ servers!**`)
        message.channel.send(embed);

    }

}
