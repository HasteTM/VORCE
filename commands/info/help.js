const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed  = new RichEmbed()

        .setColor('#7289da')
        .setDescription("*Make sure you have your DMs open!*")
        .setAuthor('Check Direct Messages!')

        const dms = new RichEmbed()

        .setColor('#7289da')
        .addField('<:work:740255311264350268> | Moderation', '`say` | `purge` | `ban` | `kick` | `unban`')
        .addField('<:botemoji:740338962333302785> | Bot', '`guild` | `botstats` | `invite` | `support` | `eval` |')
        .addField('<:bilgi:740317093018468483> |  Info', '`avatar` | `serverinfo` | `userinfo` | `ping`')
        .addField('<:speak:740255369737273454> | Fun', '`meme` | `rps` | `love`')
        .addField('<:music:740255395402219591> | Music', '`play` | `pause` | `skip` | `stop` | `volume` | `queue` | `remove` | `np`')
        .addField('<:hum:740255276099305472> | Utility','`poll` | `query`')
        .addField('<:tickee:740255341408682015> | Badge Documentation','`staff` | `partner` | `bughunter` | `vbdeveloper` | `hypesquadevents` | `earlysupporter`')
        .setImage('https://media.discordapp.net/attachments/740250432387022859/740257331891142746/A7jrU3CyC7EaAAAAAElFTkSuQmCC.png')

        message.author.send(dms)

        message.channel.send(embed)

        if (message.deletable) message.delete();

    }

}