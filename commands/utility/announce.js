const { RichEmbed, DiscordAPIError } = require("discord.js");

module.exports = {
    name: "announce",
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        const announce1 = new RichEmbed()
        .setColor('#7289da')
        .setDescription(`${args.join(" ")}`)
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const say1 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor("❗ You don't have permission to use this command.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const say2 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor("⚠️ Please provide a message for me to announce!")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send(say1).then(m => m.delete(5000));

        if (args.length < 0)
            return message.channel.send(say2).then(m => m.delete(5000));

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