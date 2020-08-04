
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "invite",

    aliases: ["botinvite", "invitebot"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setAuthor('Invite')
        .setColor("#7289da")
        .setThumbnail(client.user.displayAvatarURL)
        .setTitle("Click to invite Vorce Bot!", 'https://cdn.discordapp.com/attachments/651589704772485131/740315620696129676/bots.png')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=733774256940515349&permissions=8&scope=bot")
        .setDescription('Made with ❤️ by Vorce Bot Team')

        message.channel.send(embed);

    }

}