const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "logitech",
    category: "reddits",
    description: "Sends a random picture from the given subreddit",
    run: async (client, message, args) => {


        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#F04947`


        const subReddits = ["Logitech"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor(defaultcolor)
            .setImage(img)
            .setAuthor('Logitech')
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}
