const urban = require('urban');
const { RichEmbed } = require("discord.js");

module.exports = {

    name: "urban",

    description: "Shows urban dictionary reply.",

    run: (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`

        const msg1 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription('<a:crossmark1:742750308089856022> Please enter a word.')

        const msg2 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription('<a:crossmark1:742750308089856022> No such word exists!')

        if (args.length < 1) {
            return message.channel.send(msg1);
        }
        let word = args.join(' ');
        console.log(word);

        urban(word).first(json => {
            if (!json) {
                return message.channel.send(msg2);
            }
            console.log(json);
            const embed1 = new RichEmbed()
                .setAuthor('Urban')
                .setTitle(json.word)
                .setColor(defaultcolor)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumb_down, true)
                .setFooter(`Written by ${json.author}`);

            message.channel.send(embed1);
        });
    },
};