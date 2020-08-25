const { RichEmbed } = require("discord.js");
const api = require('imageapi.js');

module.exports = {

    name: "searchreddit",

    description: "reddit command",

    run: async (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#F04947`

    let subreddit = message.content.slice(8);

    if (!subreddit)

    return message.channel.send(`You did not specify your subreddit!`);

    try {

        let img = await api(subreddit, true);

        const embed = new RichEmbed()
        .setAuthor('Reddit')
        .setTitle(`From r/${subreddit}`)
        .setColor(defaultcolor)
        .setImage(img)
        .setURL(`https://reddit.com/r/${subreddit}`);

        message.channel.send(embed);

    } catch (err) {

        message.channel.send(err);
    }
}
};