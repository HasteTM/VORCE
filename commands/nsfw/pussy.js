const { RichEmbed } = require("discord.js");
const discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "pussy",
    aliases: ["pussy", "vagina"],
    description: "Pussy Type.",
    usage: "<input>",
    run: (client, message, args) => {

        const pussy = new RichEmbed()
        .setColor('#830000')
        .setAuthor('Use this command in a NSFW channel! (or enable it in channel settings.)', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        if(message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({type: 'pussy'})
            .end((err, response) => {
                let pussy = new RichEmbed()
                .setImage(response.body.message)
                .setTitle("🐱 - Here, have some pussy gifs / pictures!")
                .setURL(response.body.message)
                .setColor("#830000")
                .setFooter("Vorce Bot - NSFW")
    
                message.channel.send(pussy)
            });
        } else {
            message.channel.send(anal);

        }
    }
}