const { RichEmbed } = require("discord.js")

module.exports = {

    name: "pack",

    category: "fun",

    description: "Votes for the winning Packer",

    run: async (client, message, args) => {
        
        const poll = args.join(" ");

        if(!pack) {
            
            const informationPack = new RichEmbed()
            .setColor('#7289da')
            .setDescription("⚠️ If you wanna vote for a packer, please do -pack [First Packer] [Second Packer]")
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            message.channel.send(informationPack);


        } else {
            const sendPoll = new RichEmbed()
            .setColor("#7289da")
            .setAuthor('Packer', 'https://cdn.discordapp.com/attachments/651589704772485131/740315645106978876/hum.png')
            .addField(`${pack}`)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL)

            let msg = await message.channel.send(sendPoll)

            await msg.react("1️⃣")
            await msg.react("2️⃣")
        }
    }
} 