/* eslint-disable yoda */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'unban',
  category: 'moderation',
  description: 'Unbans a user from the guild.',
  run: async (client, message, args) => {


    let defaultcolor = `#7dfce9`

    let rederrorcolor = `#F04947`


    const { channel } = message;

    const noUserIDEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> Please provide a member to unban!')

    const userNoPermissionEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")

    const botNoPermission = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> Bot does not have permission to unban members.')

    const unbannedEmbed = (bannedMember) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:check1:724756573896966235> **${bannedMember.username}#${bannedMember.discriminator}** has been unbanned from the guild!`)

    const noUserBanned = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> That user is not banned from this guild.')

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
