const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
    name: "Calculate",
    category: "fun",
    description: "Math shit lmfao",
    usage: "calculate",
    run: async (client, message, args, tools) => {
        if (!args[0]) return message.channel.send('Please input a calculation.');
        let resp;
        try {
            resp = math.eval(args.join(' '));
        } catch (e) {
            return message.channel.send('Sorry, please input a valid calculation.');
        }

        const embed = new Discord.RichEmbed()
            .setrColor(0xfffff)
            .setTitle("Vorce - Math Caluclations")
            .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
            .addField('Output', `\`\`\`js\n${resp}\`\`\``)
        message.channel.send(embed);
    }
}