const { RichEmbed } = require("discord.js")
const ms = require('ms');


module.exports = {

    name: "giveaway",

    description: "Says your input via the bot",

    usage: "<input>",

    run: async (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`


        if(!args[0]) return message.channel.send(`You did not specify your time!`)

        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) 
        return message.channel.send(`You did not use the correct formatting for the time!`)

        if(isNaN(args[0][0])) 
        return message.channel.send(`That is not a number!`)

        let channel = message.mentions.channels.first()

        if(!channel) 
        return message.channel.send(`I could not find that channel in the guild!`)

        let prize = args.slice(2).join(" ")

        if(!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send(`You do not have permission to make a giveaway!`)

        if(!prize) return message.channel.send(`No prize specified!`)

        message.channel.send(`*Giveaway created in ${channel}*`)

        const Embed = new RichEmbed()

        .setAuthor('Giveaway')
        .setDescription(`${message.author} is hosting a giveaway!\nThe prize is **${prize}**`)
        .setTimestamp(`${Date.now()+ms(args[0])}`)
        .setColor(defaultcolor)

        let m = await channel.send(Embed)

        m.react("🎉")

        setTimeout(() => {

            if(m.reactions.cache.get("🎉").count<=1){

                return message.channel.send(`Not enough people reacted for me to draw a winner!`)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()

            channel.send(`The winner of the giveaway for **${prize}** is... ${winner}`)

        }, ms(args[0]));
    }
}