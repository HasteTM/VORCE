const { RichEmbed, DiscordAPIError } = require("discord.js");

const { stripIndents } = require("common-tags");

const { promptMessage } = require("../../functions.js");

module.exports = {

    name: "ban",

    category: "moderation",

    description: "bans the member",

    usage: "<id | mention>",

    run: async (client, message, args) => {

        let defaultcolor = `#7289da`

        const canceled = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription(`<a:crossmark1:742750308089856022> Ban has been canceled!`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const ban1 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription(`<a:crossmark1:742750308089856022> Please provide a member to ban.`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const ban2 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription('<a:crossmark1:742750308089856022> Please provide a reason to ban.')
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)


        const ban3 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const ban4 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription("<a:crossmark1:742750308089856022> Bot does not have permission to ban members.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const ban5 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription("<a:crossmark1:742750308089856022> Couldn't find that member, try again")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const ban6 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription("<a:crossmark1:742750308089856022> You can't ban yourself.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

        const ban7 = new RichEmbed()
        .setColor(defaultcolor)
        .setDescription("<a:crossmark1:742750308089856022> I can't ban that member due to role hierarchy.")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

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

            .setAuthor('Ban', 'https://cdn.discordapp.com/attachments/651589704772485131/740315492023009431/work.png')

            .setColor(defaultcolor)

            .setDescription(stripIndents`** Banned member:** ${toBan}

            ** Banned By:** ${message.member}

            ** Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()

            .setColor(defaultcolor)

            .setAuthor(`This verification becomes invalid after 30 minutes.`, 'https://cdn.discordapp.com/attachments/651589704772485131/740315492023009431/work.png')

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

                message.channel.send(canceled)

                    .then(m => m.delete(10000));

            }

        });

    }

};
