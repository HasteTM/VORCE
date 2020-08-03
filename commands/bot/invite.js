
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "invite",

    aliases: ["botinvite", "invitebot"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setAuthor('Invite', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setColor("#8e2430")
        .setTitle("Click to invite Vorce Bot!")
        .setThumbnail('https://cdn.discordapp.com/attachments/664927615034982410/736432981794750494/MOSHED-2020-7-24-23-1-15.gif')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=733774256940515349&permissions=8&scope=bot")
        .setDescription('Made with ❤️ by Vorce Bot Team')

        message.channel.send(embed);

    }

}