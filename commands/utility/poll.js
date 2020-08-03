const { RichEmbed } = require("discord.js")

module.exports = {

    name: "poll",

    category: "utility",

    description: "makes a poll",

    run: async (client, message, args) => {
        
        let poll = args.join(" ");

        if(!poll) {
            
            let poll1 = new RichEmbed()
            .setColor('#8e2430')
            .setAuthor(`Poll`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
            .setTitle("If you wanna create a poll, please do v!poll (message) to start a poll.")
            .setTimestamp()
            .setFooter(message.author.username, message.author.displayAvatarURL)

            message.channel.send(poll1);


        } else {
            let poll2 = new RichEmbed()
            .setColor("8e2430")
            .setTitle(`Poll By: ${message.author.username}`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
            .addField(`${poll}`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.displayAvatarURL)

            let message = await message.channel.send(poll2)

            await message.react("👍")
            await message.react("👎")
        }
    }
} 