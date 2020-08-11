const { RichEmbed } = require("discord.js")

module.exports = {

    name: "poll",

    category: "utility",

    description: "makes a poll",

    run: async (client, message, args) => {

        let defaultcolor = `#7289da`
        
        const poll = args.join(" ");

        if(!poll) {
            
            const poll1 = new RichEmbed()
            .setColor(defaultcolor)
            .setDescription("<a:crossmark1:742750308089856022> If you want to create a poll do -poll (message).")
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            message.channel.send(poll1);


        } else {
            const poll2 = new RichEmbed()
            .setColor(defaultcolor)
            .setAuthor('Poll', 'https://cdn.discordapp.com/attachments/651589704772485131/740315645106978876/hum.png')
            .setDescription(`${poll}`)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            let msg = await message.channel.send(poll2)

            await msg.react("👍")
            await msg.react("👎")
        }
    }
} 