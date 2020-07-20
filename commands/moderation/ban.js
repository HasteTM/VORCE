const { RichEmbed } = require("discord.js");

const { stripIndents } = require("common-tags");

const { promptMessage } = require("../../functions.js");

module.exports = {

    name: "ban",

    category: "moderation",

    description: "bans the member",

    usage: "<id | mention>",

    run: async (client, message, args) => {

        const logChannel = message.guild.channels.find(c => c.name === "logs034768734867") || message.channel;

        if (message.deletable) message.delete();

        if (!args[0]) {

            return message.reply("Please provide a person to ban. ")

                .then(m => m.delete(5000));

        }

        if (!args[1]) {

            return message.reply("Please provide a reason to ban.")

                .then(m => m.delete(5000));

        }

        if (!message.member.hasPermission("BAN_MEMBERS")) {

            return message.reply("❌ You do not have permissions to ban members. Please contact a staff member")

                .then(m => m.delete(5000));

        

        }

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {

            return message.reply("❌ I do not have permissions to ban members. Please contact a staff member")

                .then(m => m.delete(5000));

        }
        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan) {

            return message.reply("Couldn't find that member, try again")

                .then(m => m.delete(5000));

        }

        if (toBan.id === message.author.id) {

            return message.reply("You can't ban yourself...")

                .then(m => m.delete(5000));

        }

        if (!toBan.bannable) {

            return message.reply("I can't ban that person due to role hierarchy, I suppose.")

                .then(m => m.delete(5000));

        }

        const embed = new RichEmbed()

            .setColor("#01000a")
            
            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setTimestamp()
            
            .setDescription(stripIndents`** Banned member:** ${toBan} (${toBan.id})


            ** Banned by:** ${message.member} (${message.member.id})

            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()

            .setColor("#01000a")

            .setAuthor(`This verification becomes invalid after 30 minutes.`)

            .setDescription(`Do you want to ban ${toBan}?`)

        await message.channel.send(promptEmbed).then(async msg => {

            const emoji = await promptMessage(msg, message.author, 30000, ["✅", "❌"]);

            if (emoji === "✅") {

                msg.delete();

                toBan.ban(args.slice(1).join(" "))

                    .catch(err => {

                        if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)

                    });

                logChannel.send(embed);

            } else if (emoji === "❌") {

                msg.delete();

                message.reply(`canceled ban.`)

                    .then(m => m.delete(10000));

            }

        });

    }

};
