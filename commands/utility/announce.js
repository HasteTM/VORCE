const { RichEmbed, DiscordAPIError } = require("discord.js");

module.exports = {
    name: "announce",
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {

        let defaultcolor = `#000000`

        let rederrorcolor = `#c4121b`

        message.delete();


        const announce1 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Announcement')
        .setDescription(`${args.join(" ")}`)


        const say1 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")

        const say2 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> Please provide a message for me to announce!")


        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send(say1)

        if (args.length < 0)
            return message.channel.send(say2)

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            message.channel.send(embed);
        } else {
            message.channel.send(announce1);
        }
    }
}