
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "invite",

    aliases: ["botinvite", "invitebot"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        let defaultcolor = `#7289da`

        const embed = new RichEmbed()

        .setAuthor('Invite', 'https://cdn.discordapp.com/attachments/651589704772485131/740339977195618367/72f9c1232011ff2836495dbca55604d7.png')
        .setColor(defaultcolor)
        .setThumbnail(client.user.displayAvatarURL)
        .setTitle("Click to invite Vorce Bot!", 'https://cdn.discordapp.com/attachments/651589704772485131/740339977195618367/72f9c1232011ff2836495dbca55604d7.png')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=733774256940515349&permissions=8&scope=bot")
        .setDescription('Made with ❤️ by Vorce Bot Team')

        message.channel.send(embed);

    }

}