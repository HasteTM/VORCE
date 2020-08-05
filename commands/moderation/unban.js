const { RichEmbed } = require("discord.js")

module.exports = {

    name: "unban",

    category: "moderation",

    description: "unbans a user",


    run: async (client, message, args) => {

        const unban1 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor("You need to provide an ID.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const unban2 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor("Please provide a User ID to unban!")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const unban3 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor(`${bannedMember.tag} has been unbanned from the guild!`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const unban4 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor(`You don't have permission to use this command.`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const unban5 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor(`Bot does not have permissions to perform this command.`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)





    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(unban4)

		
	if(isNaN(args[0])) return message.channel.send(unban1)
    let bannedMember = await client.fetchUser(args[0])
        if(!bannedMember) return message.channel.send(unban2)

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "⚠️ | No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(unban5)
    message.delete()
    try {
        message.guild.unban(bannedMember, reason)
        message.channel.send(unban3)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new RichEmbed()
    .setColor('#7289da')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "unban")
    .addField("Moderated on:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "tut-modlogs")
        sChannel.send(embed)

    }
}