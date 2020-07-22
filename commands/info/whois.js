
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
// fix embeds later
            .setAuthor('Whois', 'https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif')
            .setThumbnail(member.user.displayAvatarURL)

            .setColor('#01000a')

            .addField('Member information:', stripIndents` Display name: ${member.displayName}

             Joined at: ${joined}

             Roles: ${roles}`, true)

            .addField('User information:', stripIndents` ID: ${member.user.id}

             Username: ${member.user.username}

             Tag: ${member.user.tag}

             Created at: ${created}`, true)
            .setImage('https://cdn.discordapp.com/attachments/665508963068018688/665509427188596766/rainbowdivider_1.gif')


        if (member.user.presence.game) 

            embed.addField('Currently playing', stripIndents` ${member.user.presence.game.name}`);

        message.channel.send(embed);

    }

}