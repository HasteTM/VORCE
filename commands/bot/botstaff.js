const { RichEmbed } = require("discord.js");


module.exports = {

    name: "botstaff",

    description: "Shows many servers the bot is currently in.",

    run: (client, message, args) => {

        const embed = new RichEmbed()
        .setColor('#830000')
        .setAuthor('Botstaff', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .addField('Developers',' <@651515978231971900>,  <@319516807297892371>,  <@709151479918755890>,  <@709523716333109369>')
        .addField('Bot Admins', '<@403634335736922132>,  <@698306752508198972>')
        message.channel.send(embed);

    }

}
