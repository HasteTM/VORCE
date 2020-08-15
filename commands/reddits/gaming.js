const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "gaming",
    category: "reddits",
    description: "Sends a random picture from the given subreddit",
    run: async (client, message, args) => {

        let defaultcolor = `#000000`

        const subReddits = ["gaming"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor(defaultcolor)
            .setImage(img)
            .setAuthor('Gaming')
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}