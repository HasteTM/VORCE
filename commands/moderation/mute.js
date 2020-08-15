/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
const { RichEmbed } = require('discord.js');
const fs = require('fs');
const muteStorage = require('../../storage/mute.json');

const muteStoragePath = './storage/mute.json';

module.exports = {
  name: 'mute',
  category: 'moderation',
  description: 'Mutes a user or generates a mute role.',
  run: async (client, message, args) => {
    const {
      member,
      channel,
      guild,
      author,
      mentions,
    } = message;

    let defaultcolor = `#000000`

    let rederrorcolor = `#c4121b`

    const authorLogo = 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png';

    const notEnoughPermissionEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> You don\'t have permission to use this command.')


    if (!(member.hasPermission('ADMINISTRATOR') || member.hasPermission('MANAGE_MEMBERS'))) {
      return channel.send(notEnoughPermissionEmbed);
    }

    const unknownError = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> An unknown error occured.')


    const noUserEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> You need to mention a member to mute.')


    const errorEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> There was an error. Command usage:\n**-mute generate-role [name]**\n**-mute set-role [role]**\n**-mute [user]**')


    const roleNotFound = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> Coudln\'t find that role.')


    const setRoleFirst = new RichEmbed()
      .setColor(defaultcolor)
      .setDescription('<a:crossmark1:742750308089856022> You have to set a mute role with **-mute set-role [role]** first.')


    const couldntMute = (user) => new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription(`<a:crossmark1:742750308089856022> I couldn't mute that member. Make sure my role is high enough.\n**Member:** <@${user}>`)


    const successMute = (user) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:checkmark1:742750252666191902> Successfully muted that member.\n**Member:** <@${user}>`)


    const generatedSuccessEmbed = (role) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:checkmark1:742750252666191902> Successfully generated a mute role with the name <@&${role}>`)
 

    const successSetRole = (role) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:checkmark1:742750252666191902> The guild's mute role is now: <@&${role}>`)


    const alreadyMuted = (user) => new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription(`<a:crossmark1:742750308089856022> That member is already muted.\n**Member:** <@${user}>`)


    const [firstArg] = args;
    const memberFromArg = mentions.members.first() || member.guild.members.find((u) => u.id === firstArg) || 0;

    if (!firstArg) {
      return channel.send(noUserEmbed);
    }

    if (memberFromArg) {
      args.splice(0, 1);

      const resolvedAddRole = (res, muteStor) => {
        if (!muteStorage[guild.id].mutedUsers.includes(res.user.id)) {
          muteStor[guild.id].mutedUsers.push(res.user.id);
          fs.writeFileSync(muteStoragePath, JSON.stringify(muteStor, null, 4));
        }
        channel.send(successMute(res.user.id));
      };

      const rejectedAddRole = (rej) => {
        console.log(rej);
        channel.send(couldntMute(rej.user));
      };

      if (muteStorage[guild.id] && muteStorage[guild.id].muteRole && !memberFromArg.roles.has(muteStorage[guild.id].muteRole)) {
        memberFromArg.addRole(muteStorage[guild.id].muteRole).then((res) => resolvedAddRole(res, muteStorage), rejectedAddRole);
      } else if (!muteStorage[guild.id]) {
        channel.send(setRoleFirst);
      } else if (memberFromArg.roles.has(muteStorage[guild.id].muteRole)) {
        channel.send(alreadyMuted(memberFromArg.id));
      }
    } else if (firstArg.match(/generate-role/i)) {
      args.splice(0, 1);

      if (args.join(' ').match(/(.+)/)) {
        let { $1: roleName } = RegExp;
        roleName = Array(roleName).splice(0, 999);

        guild.createRole({
          name: roleName.join(' '),
          position: guild.me.highestRole.calculatedPosition,
          permissions: 0,
        }).then((res) => {
          member.guild.channels.forEach((c) => {
            c.overwritePermissions(res, { SEND_MESSAGES: false });
          });
          channel.send(generatedSuccessEmbed(res.id));
        }).catch((e) => channel.send(unknownError));
      }
    } else if (firstArg.match(/set-role/i)) {
      args.splice(0, 1);

      if (args.join(' ').match(/(.+)/)) {
        const { $1: role } = RegExp;

        const foundRole = message.mentions.roles.first() || member.guild.roles.find((r) => r.name === role) || 0;
        if (foundRole) {
          muteStorage[guild.id] = { muteRole: String(foundRole.id), mutedUsers: [] };
          channel.send(successSetRole(muteStorage[guild.id].muteRole));
          fs.writeFileSync(muteStoragePath, JSON.stringify(muteStorage, null, 4));
        } else {
          channel.send(roleNotFound);
        }
      }
    } else {
      channel.send(errorEmbed);
    }
  },
};
