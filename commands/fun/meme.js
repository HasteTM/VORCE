const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    category: "fun",
    description: "Sends an epic meme",
    run: async (client, message, args) => {

        const subReddits = ["dankmeme", "meme", "me_irl", "memes", "dankmemes"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setAuthor('Meme', 'https://cdn.discordapp.com/attachments/651589704772485131/740315596297732268/speak.png')
            .setColor("#7289da")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}