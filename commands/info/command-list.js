
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "commandlist",

    description: "shows list of commands",

    run: (client, message, args) => {


        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`


        message.delete();

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:crossmark1:742750308089856022> To reduce spam this command is only available to Administrators.')
            .then(m => m.delete(5000));
          }


message.channel.send(`
-bughunter
-earlysupporter
-hypesquadevents
-partner
-staff
-vbdeveloper
-botstaff
-botstats
-eval
-guilds
-invite
-support
-gaymeter
-love
-meme
-rps
-avatar
-help
-ping
-serverinfo
-userinfo
-ban
-kick
-mute
-unmute
-unban
-purge
-report
-say
-announce
-lockdown
-nuke
-poll
-role
-snipe
`)
.then(m => m.delete(3000));
    }

}
