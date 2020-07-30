const { RichEmbed } = require("discord.js");

module.exports = {
    name: "purge",
    aliases: ["purge"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {

        const purge1 = new RichEmbed()
        .setColor('#830000')
        .setAuthor(`You don't have permissions to use this command.`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const purge2 = new RichEmbed()
        .setColor('#830000')
        .setAuthor(`Please enter a number [0 doesn't work].`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const purge3 = new RichEmbed()
        .setColor('#830000')
        .setAuthor(`Sorry, I do not have permissions to delete messages.`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        




        if (message.deletable) {
            message.delete();
        }
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(purge1).then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send(purge2).then(m => m.delete(5000));
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(purge3).then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`Error Purge | ${err}`));
    }
}