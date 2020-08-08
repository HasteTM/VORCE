const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "gaymeter",
    category: "fun",
    description: "Calculates the gayness of a member",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        // If no person is found
        // It's going to default to the author
        // And we don't want to love ourself in this command
        // So we filter out our ID from the server members
        // And get a random person from that collection
        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        // love is the percentage
        // loveIndex is a number from 0 to 10, based on that love variable
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "🏳️‍🌈".repeat(loveIndex) + "🏴".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#7289da")
            .setAuthor('Gaymeter', 'https://cdn.discordapp.com/attachments/651589704772485131/740315596297732268/speak.png')
            .setDescription(`**${person.displayName}** is ${Math.floor(love)}% gay`);

        message.channel.send(embed);
    }
}