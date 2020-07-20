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

            return message.reply(" ⚠️ Please provide a person to ban. ")

                .then(m => m.delete(5000));

        }

        if (!args[1]) {

            return message.reply(" ⚠️ Please provide a reason to ban.")

                .then(m => m.delete(5000));

        }

        if (!message.member.hasPermission("BAN_MEMBERS")) {

            return message.reply(" ❌ You don't have permissions to use this command.")

                .then(m => m.delete(5000));

        

        }

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {

            return message.reply(" ❌ Bot does not have permissions to kick members.")

                .then(m => m.delete(5000));

        }
        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan) {

            return message.reply(" ⚠️ Couldn't find that member, try again")

                .then(m => m.delete(5000));

        }

        if (toBan.id === message.author.id) {

            return message.reply(" ⚠️ You can't ban yourself.")

                .then(m => m.delete(5000));

        }

        if (!toBan.bannable) {

            return message.reply(" ⚠️ I can't ban that member due to role hierarchy.")

                .then(m => m.delete(5000));

        }

        const embed = new RichEmbed()

            .setColor("#01000a")
            
            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setDescription(stripIndents`** Banned member:** ${toBan} (${toBan.id})


            ** Banned by:** ${message.member} (${message.member.id})

            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()

            .setColor("#01000a")

            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')

            .setAuthor(`This verification becomes invalid after 30 minutes.`, 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')

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

                message.reply(`⚠️ Canceled ban.`)

                    .then(m => m.delete(10000));

            }

        });

    }

};
