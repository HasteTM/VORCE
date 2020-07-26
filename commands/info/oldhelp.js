
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "helpq423y",


    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#102445')
        .setAuthor('Help', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .addField('❗️  Avatar','Sends a users avatar.')
        .addField('❗️  Serverinfo','Sends info about the Server.')
        .addField('❗️  Whois','Sends information about a user.')
        .addField('🎉  Meme', 'Sends a random meme.')
        .addField('✅  Guilds','Shows how many servers the bot is in.')
        .addField('✅  Status', 'Shows the current status of the Bot.')
        .addField('✅  Invite', 'Sends the bot invite link.')
        .addField('🔐  Say', 'Says a message.')
        .addField('🔐  Ban','Bans a user.')
        .addField('🔐  Kick','Kicks a user.',)
        .addField('🔐  Purge', 'Clears the chat.')

        message.channel.send(embed);

    }

}
