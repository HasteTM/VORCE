const math = require('mathjs');
const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");

module.exports = {

    name: "calculate",

    description: "calculator command",

    run: (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#F04947`

    if(!args[0]) return message.channel.send(cmsg1);

    let resp;

    try {
        resp = math.evaluate(args.join(' '))
    } catch(e) {
        return message.channel.send(cmsg2)
    }

    const cmsg1 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription('Please provide a equation.')

    const cmsg2 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription('Please provide a __VALID__ equation.')

    const cmsg3 = new RichEmbed()
    .setColor(defaultcolor)
    .setAuthor('Calculate')
    .addField(`Question`, `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField(`Answer`, `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(cmsg3);
}
}
