const { RichEmbed } = require("discord.js");


module.exports = {

    name: "guilds",

    description: "Shows many servers the bot is currently in.",

    run: (client, message, args) => {

        let defaultcolor = `#7289da`

        const embed = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Guilds', 'https://cdn.discordapp.com/attachments/651589704772485131/740339977195618367/72f9c1232011ff2836495dbca55604d7.png')
        .setDescription(`**${client.user.username} Bot is currently in __${client.guilds.size}__ servers!**`)
        message.channel.send(embed);

    }

}
