const { RichEmbed } = require("discord.js");

module.exports = {
    name: "purge",
    aliases: ["purge"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {

        const purge1 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor(`❗ You don't have permissions to use this command.`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const purge2 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor(`⚠️ Please enter a number [0 doesn't work].`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const purge3 = new RichEmbed()
        .setColor('#7289da')
        .setAuthor(`❗ Bot does not have permission to delete/manage messages.`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        




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