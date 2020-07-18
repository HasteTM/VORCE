
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#01000a')
        .setAuthor('Commands', 'https://cdn.discordapp.com/attachments/733865554997411926/733866032598482954/png-transparent-exclamation-mark-computer-icons-interjection-question-mark-exclamation-point-monochr.png')
        .addField('❗️  Avatar','Sends a users avatar.')
        .addField('❗️  Serverinfo','Sends info about the Server.')
        .addField('❗️  Status','Sends the current status of the Bot.')
        .addField('❗️  Whois','Sends information about a user.')
        .addField('🎉  Meme', 'Sends a random meme.')
        .addField('🔐  Say', 'Says a message.')
        .addField('🔐  Ban','Bans a user.')
        .addField('🔐  Kick','Kicks a user.',)
        .addField('🔐  Purge', 'Clears the chat.')

        message.channel.send(embed);

    }

}
