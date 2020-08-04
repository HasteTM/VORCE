
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "earlysupporter",

    description: "Returns Bot information",

    run: (client, message, args) => {

        const embed = new RichEmbed()

        .setColor('#efeff8')
        .setAuthor('Early Supporter Badge', 'https://cdn.discordapp.com/attachments/651589704772485131/740260467317932109/735929639561855077.gif')
        .setDescription('The Early Supporter badge was given to people that had a Nitro Subscription before October 10th, 2018 (when Boost Nitro was released).')
        
        message.channel.send(embed);

    }

}