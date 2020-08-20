
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "support",

    description: "Returns Bot Support Server",

    run: (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`

        const embed = new RichEmbed()
// need to push new update with rgb theme
        .setColor(defaultcolor)
        .setAuthor('Support')
        .setURL('https://discord.gg/YUvxRty')
        .setTitle('Join Server here')
        .setDescription('Are you confused about how to use the bot or want to ask a question? Join the Support Server, and we can help you out!')

        message.channel.send(embed);

    }

}