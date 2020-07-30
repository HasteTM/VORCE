const { RichEmbed, DiscordAPIError } = require("discord.js");

const { stripIndents } = require("common-tags");

const { promptMessage } = require("../../functions.js");

module.exports = {

    name: "ban",

    category: "moderation",

    description: "bans the member",

    usage: "<id | mention>",

    run: async (client, message, args) => {

        const ban1 = new RichEmbed()
        .setColor('#830000')
        .setAuthor(`Please provide a person to ban. [${message.mentions.author}]`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const ban2 = new RichEmbed()
        .setColor('#830000')
        .setAuthor('Please provide a reason to ban.', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const ban3 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("You don't have permissions to use this command.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        
        const ban4 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("Bot does not have permissions to kick members.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const ban5 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("Couldn't find that member, try again", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const ban6 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("You can't ban yourself.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const ban7 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("I can't ban that member due to role hierarchy.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

        const logChannel = message.guild.channels.find(c => c.name === "logs034768734867") || message.channel;

        if (message.deletable) message.delete();

        if (!args[0]) {

            return message.channel.send(ban1)

                .then(m => m.delete(5000));

        }

        if (!args[1]) {

            return message.channel.send(ban2)

                .then(m => m.delete(5000));

        }

        if (!message.member.hasPermission("BAN_MEMBERS")) {

            return message.channel.send(ban3)

                .then(m => m.delete(5000));

        

        }

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {

            return message.channel.send(ban4)

                .then(m => m.delete(5000));

        }
        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan) {

            return message.channel.send(ban5)

                .then(m => m.delete(5000));

        }

        if (toBan.id === message.author.id) {

            return message.channel.send(ban6)

                .then(m => m.delete(5000));

        }

        if (!toBan.bannable) {

            return message.channel.send(ban7)

                .then(m => m.delete(5000));

        }

        const embed = new RichEmbed()

            .setAuthor('Ban', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

            .setColor("#fc0303")
            
            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setDescription(stripIndents`** Banned member:** ${toBan})

            ** Banned by:** ${message.member}

            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()

            .setColor("#830000")

            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setAuthor(`This verification becomes invalid after 30 minutes.`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

            .setDescription(`Do you want to ban ${toBan}?`)

        await message.channel.send(promptEmbed).then(async msg => {

            const emoji = await promptMessage(msg, message.author, 30000, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                toBan.ban(args.slice(1).join(" "))

                    .catch(err => {

                        if (err) return message.channel.send(`Error Ban | ${err}`)

                    });

                logChannel.send(embed);

            } else if (emoji === "❌") {

                msg.delete();

                message.reply(`⚠️ Canceled ban.`)

                    .then(m => m.delete(10000));

            }

        });

    }

};
