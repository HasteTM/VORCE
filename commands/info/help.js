const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {

        let defaultcolor = `#000000`

        const embed  = new RichEmbed()

        .setColor(defaultcolor)
        .setTitle('Check Direct Messages!')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const dms = new RichEmbed()

        .setColor(defaultcolor)
        .addField('<:work:740255311264350268> | Moderation', '`say` | `purge` | `ban` | `kick` | `unban` | `mute` | `unmute`')
        .addField('<:hum:740255276099305472> | Utility','`poll` | `lockdown` | `role` | `announce` | `nuke`| `snipe`')
        .addField('<:bots:740255859761741836> | Bot', '`guilds` | `stats` | `invite` | `support` | `botstaff` | `eval`')
        .addField('<:bilgi:740317093018468483> |  Info', '`avatar` | `serverinfo` | `userinfo` | `ping` | `help`')
        .addField('<:music:740255395402219591> | Music', '`play` | `pause` | `skip` | `stop` | `volume` | `queue` | `remove` | `np`')
        .addField('<:speak:740255369737273454> | Fun', '`meme` | `rps` | `love` | `wiggle`')
        .addField('<:tickee:740255341408682015> | Badge Documentation','`staff` | `partner` | `bughunter` | `vbdeveloper` | `hypesquadevents` | `earlysupporter`')
        .setImage('https://media.discordapp.net/attachments/740250432387022859/740257331891142746/A7jrU3CyC7EaAAAAAElFTkSuQmCC.png')

        message.author.send(dms)

        message.channel.send(embed)

        if (message.deletable) message.delete();

    }

}