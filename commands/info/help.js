const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {


        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`

        const embed  = new RichEmbed()

        .setColor(defaultcolor)
        .setTitle('Check Direct Messages!')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const dms = new RichEmbed()

        .setColor(defaultcolor)
        .addField('<:security:744610141592092684> | Moderation', '`say` | `purge` | `ban` | `kick` | `unban` | `mute` | `unmute`')
        .addField('<:utility:744610141411737710> | Utility','`poll` | `lockdown` | `role` | `announce` | `nuke`| `snipe` | `giveaway`')
        .addField('<:verified22:744610141512532008> | Bot', '`guilds` | `stats` | `invite` | `support` | `botstaff` | `eval`')
        .addField('<:search:744610141571383306> |  Info', '`avatar` | `serverinfo` | `userinfo` | `ping` | `help`')
        .addField('<:crown:744928212458536972> | Fun', '`meme` | `rps` | `love` | `weather` | `coinflip` | `calculate` |`8ball`')
        .addField('<:music:744928360047706202> | Music', '`play` | `pause` | `skip` | `stop` | `volume` | `queue` | `remove` | `np`')
        .addField('<:nsfw1:746133440294027384> | NSFW', '`4k` | `gif`| `anal` | `ass` | `pussy` | `hentai` | `thigh` | `holo`')
        .addField('<:arrowright:744928707847913554> | Badge Documentation','`staff` | `partner` | `bughunter` | `vbdeveloper` | `hsevents` | `esupporter`')
        .addField('<:reddit2:744929294899478628> | Reddit', '`searchreddit` | `anime` | `dogs` | `cats` | `food` | `gaming` | `discordapp` | `programmerhumor` | `csgo` | `fortnite` | `minecraft` | `valorant` | `rainbow6` | `terraria` | `logitech` | `corsair`')

        message.author.send(dms)

        message.channel.send(embed)

        if (message.deletable) message.delete();

    }

}