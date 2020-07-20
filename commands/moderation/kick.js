const { RichEmbed } = require("discord.js");

const { stripIndents } = require("common-tags");

const { promptMessage } = require("../../functions.js");

module.exports = {

    name: "kick",

    category: "moderation",

    description: "Kicks the member",

    usage: "<id | mention>",

    run: async (client, message, args) => {

        const logChannel = message.guild.channels.find(c => c.name === "logs34978937458") || message.channel;

        if (message.deletable) message.delete();

        if (!args[0]) {

            return message.reply("Please provide a person to kick.")

                .then(m => m.delete(5000));

        }

        if (!args[1]) {

            return message.reply("Please provide a reason to kick.")

                .then(m => m.delete(5000));

        }

        if (!message.member.hasPermission("KICK_MEMBERS")) {

            return message.reply("❌ You do not have permissions to kick members. Please contact a staff member")

                .then(m => m.delete(5000));

        }

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {

            return message.reply("❌ I do not have permissions to kick members. Please contact a staff member")

                .then(m => m.delete(5000));

        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toKick) {

            return message.reply("Couldn't find that member, try again")

                .then(m => m.delete(5000));

        }

        if (toKick.id === message.author.id) {

            return message.reply("You can't kick yourself...")

                .then(m => m.delete(5000));

        }

        if (!toKick.kickable) {

            return message.reply("I can't kick that person due to role hierarchy, I suppose.")

                .then(m => m.delete(5000));

        }

        const embed = new RichEmbed()

            .setColor("#01000a")

            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setDescription(stripIndents`** Kicked member:** ${toKick} (${toKick.id})

            ** Kicked by:** ${message.member} (${message.member.id})

            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()

            .setColor("#01000a")

            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setAuthor(`This verification becomes invalid after 30 seconds.`)

            .setDescription(`Do you want to kick ${toKick}?`)

        await message.channel.send(promptEmbed).then(async msg => {

            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                toKick.kick(args.slice(1).join(" "))

                    .catch(err => {

                        if (err) return message.channel.send(`Well.... the kick didn't work out. Here's the error ${err}`)

                    });

                logChannel.send(embed);

            } else if (emoji === "❌") {

                msg.delete();

                message.reply(`Kick canceled.`)

                    .then(m => m.delete(10000));

            }

        });

    }

};