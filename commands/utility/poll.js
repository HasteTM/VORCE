const { RichEmbed } = require("discord.js")

module.exports = {

    name: "poll",

    category: "utility",

    description: "makes a poll",

    run: async (client, message, args) => {

        let defaultcolor = `#000000`

        let rederrorcolor = `#c4121b`
        
        const poll = args.join(" ");

        if(!poll) {
            
            const poll1 = new RichEmbed()
            .setColor("7dfce9")
            .setDescription("<:cancel:744610141588160562> Please provide poll content.")


            message.channel.send(poll1);


        } else {
            const poll2 = new RichEmbed()
            .setColor("fba6ff")
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