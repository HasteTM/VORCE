const { RichEmbed } = require("discord.js");

module.exports = {
    name: "purge",
    aliases: ["purge"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {

        let defaultcolor = `#000000`

        let rederrorcolor = `#c4121b`

        const purge1 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription(`<a:crossmark1:742750308089856022> You don't have permissions to use this command.`)

        
        const purge2 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription(`<a:crossmark1:742750308089856022> Please enter a number [0 doesn't work].`)

        
        const purge3 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription(`<a:crossmark1:742750308089856022> Bot does not have permission to delete/manage messages.`)

        
        




        if (message.deletable) {
            message.delete();
        }
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(purge1)
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send(purge2)
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(purge3)
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