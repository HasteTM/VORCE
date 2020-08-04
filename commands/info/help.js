const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed  = new RichEmbed()

        .setColor('#8e2430')
        .setDescription("Make sure you have your DMs open!")
        .setAuthor('Check Direct Messages!', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const dms = new RichEmbed()

        .setColor('#8e2430')
        .addField('<:work:740255311264350268> | Moderation', '`say` | `purge` | `ban` | `kick` | `unban`')
        .addField('<:bots:740255859761741836> | Bot', '`guild` | `status` | `invite` | `support` | `eval` | `botinfo`')
        .addField('<:hum:740255276099305472> |  Info', '`avatar` | `serverinfo` | `userinfo` | `query` | `ping`')
        .addField('<:speak:740255369737273454> | Fun', '`meme` | `rps` | `love`')
        .addField('<:music:740255395402219591> | Music', '`play` | `pause` | `skip` | `stop` | `volume` | `queue` | `remove` | `np`')
        .addField('<:bilgi:740256839379189770> | Utility','`poll`')
        .addField('<:tickee:740255341408682015> | Badge Documentation','`staff` | `partner` | `bughunter` | `verifiedbotdeveloper` | `hypesquadevents` | `earlysupporter`')
        .setImage('https://media.discordapp.net/attachments/740250432387022859/740257331891142746/A7jrU3CyC7EaAAAAAElFTkSuQmCC.png')

        message.author.send(dms)

        message.channel.send(embed)

        if (message.deletable) message.delete();

    }

}