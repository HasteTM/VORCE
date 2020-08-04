const { RichEmbed } = require("discord.js");


module.exports = {

    name: "botstaff",

    description: "Shows many servers the bot is currently in.",

    run: (client, message, args) => {

        const embed = new RichEmbed()
        .setColor('#7289da')
        .setAuthor('Botstaff', 'https://cdn.discordapp.com/attachments/651589704772485131/740339977195618367/72f9c1232011ff2836495dbca55604d7.png')
        .addField('Developers',' <@651515978231971900>,  <@319516807297892371>,  <@709151479918755890>,  <@709523716333109369>')
        .addField('Bot Admins', '<@403634335736922132>,  <@698306752508198972>,  <@642462432643514368>,  <@720396300012617869>')
        message.channel.send(embed);

    }

}
