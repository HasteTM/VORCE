
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed  = new RichEmbed()

        .setColor('#830000')
        .setDescription("Make sure you have your DMs open!")
        .setAuthor('Check Direct Messages!', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')


        const dms = new RichEmbed()

        .setColor('#8e2430')
        .setAuthor('Help', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .addField('🔐 | Moderation', '`say, purge, ban, kick, unban,`')
        .addField('✅  | Bot', '`guilds, status, invite, support, eval, botinfo`')
        .addField('❗️ |  Info', '`avatar, serverinfo, userinfo, query, ping`')
        .addField('🎉 | Fun', '`meme, rps, love`')
        .addField('🎵 | Music', '`play, pause, skip, stop, volume, queue, remove, np`')
        .addField('🔧 | Utility','`Coming Soong!!`')
        .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')


        message.author.send(dms)
        message.channel.send(embed)
        if (message.deletable) message.delete();

    }

}
