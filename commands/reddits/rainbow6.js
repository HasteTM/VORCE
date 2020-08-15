const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "rainbow6",
    category: "reddits",
    description: "Sends a random picture from the given subreddit",
    run: async (client, message, args) => {

        let defaultcolor = `#000000`

        const subReddits = ["Rainbow6"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor(defaultcolor)
            .setImage(img)
            .setAuthor('Rainbow6')
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}