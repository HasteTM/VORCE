const { RichEmbed } = require("discord.js");


module.exports = {

    name: "botstaff",

    description: "Shows many servers the bot is currently in.",

    run: (client, message, args) => {

        let defaultcolor = `#000000`

        const embed = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('Botstaff')
        .addField('Founder', '<@651515978231971900>, <@709151479918755890>')
        .addField('Developers',' <@522080989057515533>,  <@319516807297892371>, <@709523716333109369>')
        .addField('Bot Admins', '<@403634335736922132>,  <@698306752508198972>,  <@642462432643514368>,  <@720396300012617869>,  <@522895569039917066>')
        message.channel.send(embed);

    }

}
