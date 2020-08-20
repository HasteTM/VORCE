const { RichEmbed } = require("discord.js")
const ms = require('ms');


module.exports = {

    name: "giveaway",

    description: "Says your input via the bot",

    usage: "<input>",

    run: async (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`
        
    const g1 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> You didn't specify a time! \n`Example: -giveaway 1m/h/d #channelname nameofprize`")

    const g2 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> You didn't use the correct formatting for the time! \n`Example: -giveaway 1m/h/d #channelname nameofprize`")

    const g3 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription('<a:crossmark1:742750308089856022> That is not a number! \n`Example: -giveaway 1m/h/d #channelname nameofprize`')

    const g4 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> I couldn't find that channel!")

    const g5 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")

    const g6 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> You didn't specify a prize!")

    const g7 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> Not enough people reacted for me to announce a winner!")


        if(!args[0]) return message.channel.send(g1)

        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) 
        return message.channel.send(g2)

        if(isNaN(args[0][0])) 
        return message.channel.send(g3)

        let channel = message.mentions.channels.first()

        if(!channel) 
        return message.channel.send(g4)

        const g8 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription(`<a:check1:724756573896966235> *Giveaway created in ${channel}*`)

        let prize = args.slice(2).join(" ")

        if(!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send(g5)

        if(!prize) return message.channel.send(g6)

        message.channel.send(g8)

        const Embed = new RichEmbed()

        .setAuthor('Giveaway')
        .setDescription(`${message.author} is hosting a giveaway!\nThe prize is **${prize}**`)
        .setTimestamp(`${Date.now()+ms(args[0])}`)
        .setColor(defaultcolor)

        let m = await channel.send(Embed)

        m.react("🎉")

        setTimeout(() => {

            if(m.reactions.cache.get("🎉").count<=1){

                return message.channel.send(g7)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()

            channel.send(g9)

            const g9 = new RichEmbed()
            .setColor(defaultcolor)
            .setDescription(`🎉 The winner of the giveaway for **${prize}** is ${winner}`)

        }, ms(args[0]));
    }
}
