const { RichEmbed } = require("discord.js");

const { stripIndents } = require("common-tags");

const { promptMessage } = require("../../functions.js");

module.exports = {

    name: "kick",

    category: "moderation",

    description: "Kicks the member",

    usage: "<id | mention>",

    run: async (client, message, args) => {

        const kick1 = new RichEmbed()
        .setColor('#830000')
        .setAuthor(`Please provide a person to kick.`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const kick2 = new RichEmbed()
        .setColor('#830000')
        .setAuthor('Please provide a reason to kick.', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick3 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("You don't have permissions to use this command.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick4 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("Bot does not have permissions to kick members.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick5 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("Couldn't find that member, try again", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick6 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("You can't kick yourself.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick7 = new RichEmbed()
        .setColor('#830000')
        .setAuthor("I can't kick that member due to role hierarchy.", 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const logChannel = message.guild.channels.find(c => c.name === "logs34978937458") || message.channel;

        if (message.deletable) message.delete();

        if (!args[0]) {

            return message.channel.send(kick1)

                .then(m => m.delete(5000));

        }

        if (!args[1]) {

            return message.channel.send(kick2)

                .then(m => m.delete(5000));

        }

        if (!message.member.hasPermission("KICK_MEMBERS")) {

            return message.channel.send(kick3)

                .then(m => m.delete(5000));

        }

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {

            return message.channel.send(kick4)

                .then(m => m.delete(5000));

        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toKick) {

            return message.channel.send(kick5)
                .then(m => m.delete(5000));

        }

        if (toKick.id === message.author.id) {

            return message.channel.send(kick6)

                .then(m => m.delete(5000));

        }

        if (!toKick.kickable) {

            return message.channel.send(kick7)

                .then(m => m.delete(5000));

        }

        const embed = new RichEmbed()

            .setAuthor('Kick', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

            .setColor("#fc0303")

            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setDescription(stripIndents`** Kicked member:** ${toKick})

            ** Kicked by:** ${message.member}

            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()

            .setColor("#830000")

            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setAuthor(`This verification becomes invalid after 30 minutes.`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

            .setDescription(`Do you want to kick ${toKick}?`)

        await message.channel.send(promptEmbed).then(async msg => {

            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                toKick.kick(args.slice(1).join(" "))

                    .catch(err => {

                        if (err) return message.channel.send(`Error Kick |  ${err}`)

                    });

                logChannel.send(embed);

            } else if (emoji === "❌") {

                msg.delete();

                message.reply(`⚠️ Canceled Kick`)

                    .then(m => m.delete(10000));

            }

        });

    }

};