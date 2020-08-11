const { RichEmbed } = require("discord.js");

const { stripIndents } = require("common-tags");

const { promptMessage } = require("../../functions.js");

module.exports = {

    name: "kick",

    category: "moderation",

    description: "Kicks the member",

    usage: "<id | mention>",

    run: async (client, message, args) => {

        let defaultcolor = `#7289da`

        const canceled = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor(`⚠️ Kick has been canceled!`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const kick1 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor(`⚠️ Please provide a person to kick.`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const kick2 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor('⚠️ Please provide a reason to kick.')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick3 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor("❗ You don't have permission to use this command.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick4 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor("❗ Bot does not have permission to kick members.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick5 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor("⚠️  Couldn't find that member, try again")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick6 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor("⚠️  You can't kick yourself.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        
        const kick7 = new RichEmbed()
        .setColor(defaultcolor)
        .setAuthor("⚠️  I can't kick that member due to role hierarchy.")
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

            .setAuthor('Kick', 'https://cdn.discordapp.com/attachments/651589704772485131/740315492023009431/work.png')

            .setColor(defaultcolor)

            .setDescription(stripIndents`** Kicked member:** ${toKick})

            ** Kicked by:** ${message.member}

            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()

            .setColor(defaultcolor)

            .setAuthor(`This verification becomes invalid after 30 minutes.`, 'https://cdn.discordapp.com/attachments/651589704772485131/740315492023009431/work.png')

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

                message.channel.send(canceled)

                    .then(m => m.delete(10000));

            }

        });

    }

};
