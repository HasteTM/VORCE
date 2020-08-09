/* eslint-disable yoda */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'unban',
  category: 'moderation',
  description: 'Unbans a user from the guild.',
  run: async (client, message, args) => {
    const { channel } = message;
    const authorLogo = 'https://cdn.discordapp.com/attachments/651589704772485131/740315492023009431/work.png';

    const noUserIDEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Unban', authorLogo)
      .setDescription('⚠️ Please provide a user to unban!')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const userNoPermissionEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Unban', authorLogo)
      .setDescription("❗ You don't have permission to use this command.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const botNoPermission = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Unban', authorLogo)
      .setDescription('❗ Bot does not have permission to unban members.')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const unbannedEmbed = (bannedMember) => new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Unban', authorLogo)
      .setDescription(`✅ **${bannedMember.username}#${bannedMember.discriminator}** has been unbanned from the guild!`)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const noUserBanned = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Unban', authorLogo)
      .setDescription('⚠️ That user is not banned from this guild.')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const [memberToUnban] = args;
    args.splice(0, 1);

    if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
      return channel.send(userNoPermissionEmbed);
    }

    if (!message.guild.me.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
      return channel.send(botNoPermission);
    }

    if (!memberToUnban) {
      return channel.send(noUserIDEmbed);
    }

    const reason = args.join(' ') || '⚠️ No reason given!';

    const handleResolvedUnban = (user) => {
      channel.send(unbannedEmbed(user));
    };

    const handleRejectedUnban = (r) => {
      console.log(r);
      channel.send(noUserBanned);
    };

    const handleResolvedUser = (user) => {
      message.guild.unban(user.user.id, reason).then((r) => handleResolvedUnban(r, user.user), (r) => handleRejectedUnban(r));
    };

    const handleRejectedUser = (r) => {
      console.log(r);
      channel.send(noUserBanned);
    };

    message.guild.fetchBan(memberToUnban).then(handleResolvedUser, (r) => handleRejectedUser(r));
  },
};
