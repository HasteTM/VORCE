/* eslint-disable no-shadow */
const { RichEmbed } = require('discord.js');

let isLocked = false;

module.exports = {
  name: 'lockdown',
  description: 'Locks the current channel.',
  run: (client, message) => {


    let defaultcolor = `#7dfce9`

    let rederrorcolor = `#F04947`


    const perms1 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")


    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.channel.send(perms1)

    }

    const lockEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('Lockdown')
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription('<a:check1:724756573896966235> Locked the channel.');

    const unlockEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('Lockdown')
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription('<a:check1:724756573896966235> Unlocked the channel.');
      

    if (!isLocked) {
      message.member.guild.roles.forEach((role) => {
        if (role === message.member.guild.defaultRole) {
          message.channel.overwritePermissions(message.channel.guild.roles.find((r) => r.id === role.id), { SEND_MESSAGES: false });
        }
      });
      message.channel.send(lockEmbed);
      isLocked = !isLocked;
    } else {
      message.member.guild.roles.forEach((role) => {
        if (role === message.member.guild.defaultRole) {
          message.channel.overwritePermissions(message.channel.guild.roles.find((r) => r.id === role.id), { SEND_MESSAGES: null });
        }
      });
      message.channel.send(unlockEmbed);
      isLocked = !isLocked;
    }
  },
}; 