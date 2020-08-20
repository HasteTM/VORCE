const urban = require('urban');
const { RichEmbed } = require("discord.js");

module.exports = {

    name: "urban",

    description: "Shows urban dictionary reply.",

    run: (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`

        if (args.length < 1) {
            return message.channel.send('Please enter a word');
        }
        let word = args.join(' ');
        console.log(word);

        urban(word).first(json => {
            if (!json) {
                return message.channel.send('No such word exist!');
            }
            console.log(json);
            const embed1 = new RichEmbed()
                .setTitle(json.word)
                .setColor(defaultcolor)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumb_down, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`);

            message.channel.send(embed1);
        });
    },
};