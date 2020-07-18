
const { RichEmbed } = require("discord.js");

const { stripIndents } = require("common-tags");

const { getMember, formatDate } = require("../../functions.js");

module.exports = {

    name: "whois",

    aliases: ["userinfo"],

    description: "Returns user information",

    usage: "[username | id | mention]",

    run: (client, message, args) => {

        const member = getMember(message, args.join(" "));

        const joined = formatDate(member.joinedAt);

        const roles = member.roles

            .filter(r => r.id !== message.guild.id)

            .map(r => r).join(", ") || 'none';

        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()

            .setFooter(member.displayName, member.user.displayAvatarURL)

            .setThumbnail(member.user.displayAvatarURL)

            .setColor('#01000a')

            .addField('Member information:', stripIndents`** Display name:** ${member.displayName}

            ** Joined at:** ${joined}

            ** Roles:** ${roles}`, true)

            .addField('User information:', stripIndents`** ID:** ${member.user.id}

            ** Username**: ${member.user.username}

            ** Tag**: ${member.user.tag}

            ** Created at**: ${created}`, true)

            .setTimestamp()

        if (member.user.presence.game) 

            embed.addField('Currently playing', stripIndents` ${member.user.presence.game.name}`);

        message.channel.send(embed);

    }

}