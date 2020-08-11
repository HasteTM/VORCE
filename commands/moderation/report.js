const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {

        const nochannel1 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Report', 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png')
        .setDescription("<a:crossmark1:742750308089856022> Couldn't find a `#reports` channel")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

        const providereason = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Report', 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png')
        .setDescription("<a:crossmark1:742750308089856022> Please provide a reason for the report.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

        const cantreportthatmember = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Report', 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png')
        .setDescription("<a:crossmark1:742750308089856022> Can't report that member.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

        const couldntfindthatmember = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Report', 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png')
        .setDescription("<a:crossmark1:742750308089856022> Couldn't find that member, are they in the server?")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);

        let defaultcolor = `#7289da`

        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.channel.send(couldntfindthatmember).then(m => m.delete(5000));

        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send(cantreportthatmember).then(m => m.delete(5000));

        if (!args[1])
            return message.channel.send(providereason).then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "reports")
            
        if (!channel)
            return message.channel.send(nochannel1).then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor(defaultcolor)
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`** Member:** ${rMember} (${rMember.user.id})
            ** Reported by:** ${message.member}
            ** Reported in:** ${message.channel}
            ** Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}