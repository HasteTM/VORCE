/* eslint-disable no-shadow */
const { RichEmbed } = require('discord.js');

let isLocked = false;

module.exports = {
  name: 'lockdown',
  description: 'Locks the current channel.',
  run: (client, message) => {

    const perms1 = new RichEmbed()
    .setColor('#7289da')
    .setTitle("You don't have permission to use this command.")
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL)

    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.channel.send(perms1)
      .then(m => m.delete(5000));
    }


    const lockEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Lockdown', 'https://cdn.discordapp.com/attachments/651589704772485131/740315645106978876/hum.png')
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription('🔒 Locked the channel.');

    const unlockEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Lockdown', 'https://cdn.discordapp.com/attachments/651589704772485131/740315645106978876/hum.png')
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription('🔓 Unlocked the channel.');
      

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