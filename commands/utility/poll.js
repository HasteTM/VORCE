const { RichEmbed } = require("discord.js")

module.exports = {

    name: "poll",

    category: "utility",

    description: "makes a poll",

    run: async (client, message, args) => {
        
        const poll = args.join(" ");

        if(!poll) {
            
            const poll1 = new RichEmbed()
            .setColor('#8e2430')
            .setAuthor(`Poll`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
            .setTitle("If you wanna create a poll, please do v!poll (message) to start a poll.")
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            message.channel.send(poll1);


        } else {
            const poll2 = new RichEmbed()
            .setColor("8e2430")
            .setAuthor(`Poll By: ${message.author.username}`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
            .addField(`${poll}`, `Vote Down Below!`)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            let msg = await message.channel.send(poll2)

            await msg.react("👍")
            await msg.react("👎")
        }
    }
} 