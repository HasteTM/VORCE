const { RichEmbed } = require("discord.js");


module.exports = {

    name: "guilds",

    description: "Shows many servers the bot is currently in.",

    run: (client, message, args) => {

        let defaultcolor = `#000000`

        const embed = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Guilds')
        .setDescription(`**${client.user.username} Bot is currently in __${client.guilds.size}__ servers!**`)
        message.channel.send(embed);

    }

}
