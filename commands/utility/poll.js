const { RichEmbed } = require("discord.js")

module.exports = {

    name: "poll",

    category: "utility",

    description: "makes a poll.",

    run: async (client, message, args) => {


        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#F04947`

        
        const poll = args.join(" ");

        if(!poll) {
            
            const poll1 = new RichEmbed()
            .setColor(rederrorcolor)
            .setDescription("<a:crossmark1:742750308089856022> Please provide poll content.")


            message.channel.send(poll1);


        } else {
            const poll2 = new RichEmbed()
            .setColor(defaultcolor)
            .setAuthor('Poll')
            .setDescription(`${poll}`)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            let msg = await message.channel.send(poll2)

            await msg.react("👍")
            await msg.react("👎")
        }
    }
} 
