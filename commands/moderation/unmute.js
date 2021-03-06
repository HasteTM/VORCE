/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
const { RichEmbed } = require('discord.js');
const fs = require('fs');
const muteStorage = require('../../storage/mute.json');

const muteStoragePath = './storage/mute.json';

module.exports = {
  name: 'unmute',
  category: 'moderation',
  description: 'Unmutes a user.',
  run: async (client, message, args) => {
    const {
      member,
      channel,
      guild,
      author,
      mentions,
    } = message;


    let defaultcolor = `#7dfce9`

    let rederrorcolor = `#F04947`


    const notEnoughPermissionEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> You don\'t have permission to use this command.')


    if (!(member.hasPermission('ADMINISTRATOR') || member.hasPermission('MANAGE_MEMBERS'))) {
      return channel.send(notEnoughPermissionEmbed);
    }

    const errorEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> There was an error. \nYou have to set up the **mute** command first.\n**-mute generate-role [name]**\n**-mute set-role [role]**')


    const notMutedEmbed = (user) => new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription(`<a:crossmark1:742750308089856022> That member is not muted.\n**Member:** <@${user}>`)


    const userNotFoundEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> Couldn\'t find that user.')


    const noUserEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> Please provide a member to unmute.')


    const couldntUnMute = (user) => new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription(`<a:crossmark1:742750308089856022> I couldn't unmute that member. Make sure my role is high enough.\n**Member:** <@${user}>`)


    const successUnMute = (user) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:check1:724756573896966235> Successfully unmuted that member.\n**Member:** <@${user}>`)


    if (!muteStorage[guild.id]) {
      return channel.send(errorEmbed);
    }

    const [firstArg] = args;

    if (!firstArg) {
      return channel.send(noUserEmbed);
    }

    const memberFromArg = mentions.members.first() || member.guild.members.find((u) => u.id === firstArg) || 0;

    if (!memberFromArg) {
      return channel.send(userNotFoundEmbed);
    }

    if (!memberFromArg.roles.has(muteStorage[guild.id].muteRole)) {
      return channel.send(notMutedEmbed(memberFromArg.id));
    }

    const resolvedRemoveRole = (res, muteStor) => {
      muteStor[guild.id].mutedUsers.splice(muteStor[guild.id].mutedUsers.indexOf(res.user.id), 1);
      channel.send(successUnMute(res.user.id));
      fs.writeFileSync(muteStoragePath, JSON.stringify(muteStor, null, 4));
    };

    const rejectedRemoveRole = (rej) => {
      channel.send(couldntUnMute(rej.user.id));
    };
    memberFromArg.removeRole(muteStorage[guild.id].muteRole).then((res) => resolvedRemoveRole(res, muteStorage), rejectedRemoveRole);
  },
};
