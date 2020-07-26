
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#102445')
        .setAuthor('Help', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .addField('🔐 Moderation', '`say, purge, ban, kick, addrole, removerole, unban`')
        .addField('✅ Bot', '`guilds, status, invite, support, eval`')
        .addField('❗️ Info', '`avatar, serverinfo, userinfo`')
        .addField('🎉 Fun', '`meme, rps, love`')
        .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')


        message.channel.send(embed);

    }

}
