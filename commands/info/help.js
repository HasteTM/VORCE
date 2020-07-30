
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed  = new RichEmbed()

        .setColor('#830000')
        .setAuthor('Check Direct Messages!', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')


        const dms = new RichEmbed()

        .setColor('#830000')
        .setAuthor('Help', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .addField('🔐 Moderation', '`say, purge, ban, kick, unban,`')
        .addField('✅ Bot', '`guilds, status, invite, support, eval`')
        .addField('❗️ Info', '`avatar, serverinfo, userinfo, query`')
        .addField('🎉 Fun', '`meme, rps, love, fortnite store`')
        .addField('🎵 Music', '`Coming Soon!!`')
        .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')


        message.author.send(dms)
        message.channel.send(embed)
        if (message.deletable) message.delete();

    }

}
