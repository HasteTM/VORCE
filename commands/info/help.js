const { RichEmbed } = require("discord.js");


module.exports = {

    name: "help",

    aliases: ["commands", "help"],

    description: "Returns Bot information",

    run: (client, message, args) => {


        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#F04947`

        const cmd = new RichEmbed()

        .setColor(defaultcolor)
        .addField('<:security:744610141592092684> Moderation', '`say` `purge` `ban` `kick` `unban` `mute` `unmute` `report`', true)
        .addField('<:utility:744610141411737710> Utility','`poll` `lockdown` `role` `announce` `nuke` `snipe` `giveaway`', true)
        .addField('<:verified22:744610141512532008> Bot', '`guilds` `stats` `invite` `support` `botstaff` `eval`', true)
        .addField('<:search:744610141571383306>  Info', '`avatar` `serverinfo` `userinfo` `ping` `help`', true)
        .addField('<:crown:744928212458536972> Fun', '`meme` `rps` `love` `weather` `imdb` `coinflip` `calculate` `8ball` `urban`', true)
        .addField('<:music:744928360047706202> Music', '`play` `pause` `skip` `stop` `volume` `queue` `remove` `np`', true)
        .addField('<:nsfw1:746133440294027384> NSFW', '`4k` `gif` `anal` `ass` `pussy` `hentai` `thigh` `holo`', true)
        .addField('<:arrowright:744928707847913554> Badge Documentation','`staff` `partner` `bughunter` `vbdeveloper` `hsevents` `esupporter`', true)
        .addField('<:reddit2:744929294899478628> Reddit', '`anime` `dogs` `cats` `food` `gaming` `discordapp` `programmerhumor` `logitech` `corsair`', true)
        .setFooter('Global Bot Prefix -')

        message.channel.send(cmd)

    }

}