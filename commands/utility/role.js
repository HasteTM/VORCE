/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'role',
  description: 'Adds or removes a role from a user.',
  run: (client, message, args) => {

    let defaultcolor = `#000000`

    const perms1 = new RichEmbed()
    .setColor(defaultcolor)
    .setAuthor("<a:crossmark1:742750308089856022> You don't have permission to use this command.")

    if(!(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_ROLES'))) {
        return message.channel.send(perms1)
    }

    const authorLogo = 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png';
    const noUser = new RichEmbed()
      .setColor(defaultcolor)
      .setDescription('<a:crossmark1:742750308089856022> You need to mention a user to add a role to.');

    const noMethod = (methods) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:crossmark1:742750308089856022> Please choose one of these methods: \`${methods.join(', ')}\``);

    const noRoles = new RichEmbed()
      .setColor(defaultcolor)
      .setDescription('<a:crossmark1:742750308089856022> Couldn\'t find the role.\nPlease specify one or multiple roles split with commas.');

    const unknownError = new RichEmbed()
      .setColor(defaultcolor)
      .setDescription('<a:crossmark1:742750308089856022> An unknown error occured.');

    const couldntAddRoles = (roles, user) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:crossmark1:742750308089856022> Couldn't add the role${roles.length > 1 ? 's' : ''} to the member.\nAre you sure my role is high enough?\nRole${roles.length > 1 ? 's' : ''} affected: ${roles.join(', ')}\nMember: ${user}`);

    const couldntRemoveRoles = (roles, user) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:crossmark1:742750308089856022> Couldn't remove the role${roles.length > 1 ? 's' : ''} from the member.\nAre you sure my role is high enough?\nRole${roles.length > 1 ? 's' : ''} affected: ${roles.join(', ')}\nMember: ${user}`);

    const noChanges = new RichEmbed()
      .setColor(defaultcolor)
      .setDescription('<a:crossmark1:742750308089856022> No changes were made.');

    const successAddRole = (roles, user) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:checkmark1:742750252666191902> Successfully added the role${roles.length > 1 ? 's' : ''}.\nRole${roles.length > 1 ? 's' : ''} added: ${roles.join(', ')}\nMember: ${user}`);

    const successRemoveRole = (roles, user) => new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`<a:checkmark1:742750252666191902> Successfully removed the role${roles.length > 1 ? 's' : ''}.\nRole${roles.length > 1 ? 's' : ''} removed: ${roles.join(', ')}\nMember: ${user}`);

    const { channel } = message;
    const mentionedUser = message.mentions.members.first() || message.member.guild.members.find((user) => user.id === args[1]) || undefined;

    if (!mentionedUser && args) {
      channel.send(noUser);
      return;
    }
    args.splice(1, 1);

    if (args) {
      const method = args.splice(0, 1);
      const rolesObj = {};
      const rolesArgs = args.join(' ').split(/, */);
      rolesArgs.forEach((argRole) => {
        message.member.guild.roles.forEach((role) => {
          if (role.name.toLowerCase() === argRole.toLowerCase() || role.id === argRole.replace('<@&', '').replace('>', '')) {
            rolesObj[role.name] = { id: role.id };
          }
        });
      });

      const roleArray = [];
      Object.values(rolesObj).forEach((role) => roleArray.push(role.id));

      if (!method.toString().match(/(remove|add)/i)) {
        channel.send(noMethod(['add', 'remove']));
        return;
      }

      if (roleArray.length < 1) {
        channel.send(noRoles);
        return;
      }

      const { $1 } = RegExp;
      const removedRoles = [];

      const handlePromiseAddRoles = (_roles, roleArray) => {
        const rolesMention = [];
        _roles.forEach((r) => {
          if (roleArray.includes(r)) {
            rolesMention.push(`<@&${r}>`);
            roleArray.splice(roleArray.indexOf(r), 1);
          }
        });
        if ($1 === 'add' && roleArray.length <= rolesMention.length) {
          channel.send(successAddRole(rolesMention, mentionedUser));
        }
      };

      const rejectedAddRoles = [];
      let i = 0;
      const handlePromiseRejectAddRoles = (rej) => {
        i += 1;
        for (let x = i; x <= i; x += 1) {
          rejectedAddRoles.push(`<@&${rej.path.match(/\d{18}$/)}>`);
        }
        if (rejectedAddRoles.length <= roleArray.length) {
          channel.send(couldntAddRoles(rejectedAddRoles, mentionedUser));
        }
      };

      const rejectedRemoveRoles = [];
      let z = 0;
      const handlePromiseRejectRemoveRoles = (rej, removeRoles) => {
        z += 1;
        for (let x = z; x <= z; x += 1) {
          rejectedAddRoles.push(`<@&${removeRoles}>`);
        }
        if (rejectedRemoveRoles.length <= roleArray.length) {
          channel.send(couldntRemoveRoles(rejectedAddRoles, mentionedUser));
        }
      };

      const resolveRemoveRoles = [];
      let y = 0;
      const handlePromiseRemoveRoles = (_fulfilled, role) => {
        y += 1;
        for (let x = y; x <= y; x += 1) {
          if (roleArray.includes(role)) {
            resolveRemoveRoles.push(`<@&${role}>`);
          }
        }
        if (rejectedRemoveRoles.length <= roleArray.length) {
          channel.send(successRemoveRole(resolveRemoveRoles, mentionedUser))
        }
      };

      try {
        const alreadyHasRoles = [];
        let x = 0;
        roleArray.forEach((role) => {
          x += 1;
          for (let i = x; i <= x; i += 1) {
            if (!mentionedUser.roles.has(role)) {
              alreadyHasRoles.push(role);
            }
          }
          if ($1 === 'remove' && !mentionedUser.roles.has(role) && alreadyHasRoles.length === roleArray.length) {
            channel.send(noChanges);
          }
          if ($1 === 'remove' && mentionedUser.roles.has(role)) {
            mentionedUser.removeRole(role)
              .then((_fulfilled) => handlePromiseRemoveRoles(_fulfilled, role), (rej) => handlePromiseRejectRemoveRoles(rej, role));
          }

          if ($1 === 'add' && !mentionedUser.roles.has(role)) {
            mentionedUser.addRole(role)
              .then((_fulfilled) => handlePromiseAddRoles(_fulfilled._roles, roleArray), (rej) => handlePromiseRejectAddRoles(rej, roleArray));
          } else if ($1 === 'add' && mentionedUser.roles.has(role)) {
            channel.send(noChanges);
          }
        });
      } catch (e) {
        console.log(e);
        channel.send(unknownError);
      }
    }
  },
};

