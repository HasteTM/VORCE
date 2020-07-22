
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "invite",

    aliases: ["botinvite", "invitebot"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setAuthor('Invite', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setColor("#01000a")
        .setTitle("Click to invite Haste Bot!")
        .setThumbnail('https://cdn.discordapp.com/avatars/733774256940515349/73143418d7c393e9e4f636e10af7d90b.png?size=2048')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=733774256940515349&permissions=8&scope=bot")
        .setDescription('Bot made by Haste#1400')

        message.channel.send(embed);

    }

}