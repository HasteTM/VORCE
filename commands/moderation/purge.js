module.exports = {
    name: "purge",
    aliases: ["purge"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You do have permissions to delete messages").then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Please enter a number (0 doesn't work).").then(m => m.delete(5000));
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Sorry, I do not have permissions to delete messages.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}