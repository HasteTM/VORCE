const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "Corsair",
    category: "reddits",
    description: "Sends a random picture from the given subreddit",
    run: async (client, message, args) => {


        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`


        const subReddits = ["Corsair"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor(defaultcolor)
            .setImage(img)
            .setAuthor('Corsair')
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}
