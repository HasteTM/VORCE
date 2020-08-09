const { RichEmbed } = require("discord.js")

module.exports = {

    name: "poll",

    category: "utility",

    description: "makes a poll",

    run: async (client, message, args) => {
        
        const poll = args.join(" ");

        if(!poll) {
            
            const poll1 = new RichEmbed()
            .setColor('#7289da')
            .setDescription("⚠️ If you want to create a poll do -poll (message).")
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            message.channel.send(poll1);


        } else {
            const poll2 = new RichEmbed()
            .setColor("#7289da")
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