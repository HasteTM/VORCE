
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#2003fc')
        .setAuthor('Commands', 'https://cdn.discordapp.com/attachments/651589704772485131/725457453772439562/kindpng_1214421.png')
        .addField('**Avatar**','__Sends a users avatar.__')
        .addField('**Serverinfo**','__Sends info about the Server.__')
        .addField('**Status**','__Sends the current status of the Bot.__')
        .addField('**Whois**','__Sends information about a user.__')
        .addField('**Ban**','__Bans a user.__')
        .addField('**Kick**','__Kicks a user.__',)
        .addField('**Purge**', '__Clears the chat.__')

        message.channel.send(embed);

    }

}