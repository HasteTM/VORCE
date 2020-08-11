
const { RichEmbed } = require("discord.js");

const { stripIndents } = require("common-tags");

const { getMember, formatDate } = require("../../functions.js");



module.exports = {

    name: "avatar",

    aliases: ["avatar", "av"],

    description: "Returns user information",

    usage: "[username | id | mention]",

    run: (client, message, args) => {

        let defaultcolor = `#000000`

        const member = getMember(message, args.join(" "));

        const joined = formatDate(member.joinedAt);

        const roles = member.roles

            .filter(r => r.id !== message.guild.id)

            .map(r => r).join(", ") || 'none';

        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()

            .setAuthor('Avatar')

            .setTitle(`${member.user.tag}'s Avatar`)

            .setURL(member.user.displayAvatarURL)

            .setImage(member.user.displayAvatarURL)

            .setColor(defaultcolor)

        message.channel.send(embed);

    }

}