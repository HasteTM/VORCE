const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {


        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#F04947`


        const nochannel1 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> Couldn't find a `#reports` channel")


        const providereason = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> Please provide a reason for the report.")


        const cantreportthatmember = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> Can't report that member.")


        const couldntfindthatmember = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> Couldn't find that member, are they in the server?")



        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.channel.send(couldntfindthatmember)

        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send(cantreportthatmember)

        if (!args[1])
            return message.channel.send(providereason)
        
        const channel = message.guild.channels.find(c => c.name === "reports")
            
        if (!channel)
            return message.channel.send(nochannel1)

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