const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'kick',
  category: 'moderation',
  description: 'Kicks the member',
  usage: '<id | mention>',

  run: async (client, message, args) => {

    let defaultcolor = `#7dfce9`

    let rederrorcolor = `#fba6ff`

    const noUserEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> Please provide a person to kick.')

    const noPermsUserEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")

    const noPermsBotEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> Bot does not have permission to kick members.')

    const couldntFindMemberEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription("<a:crossmark1:742750308089856022> Couldn't find that member.")

    const cantKickSelfEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription("<a:crossmark1:742750308089856022> You can't kick yourself.")

    const roleNotHighEnoughEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription("<a:crossmark1:742750308089856022> I can't kick that member due to role hierarchy.")

      const [user] = args;

    if (!user) {
      return message.channel.send(noUserEmbed)

    }

    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.channel.send(noPermsUserEmbed)

    }

    if (!message.guild.me.hasPermission('KICK_MEMBERS')) {
      return message.channel.send(noPermsBotEmbed)

    }

    const toKick = message.mentions.members.first() || message.guild.members.get(user);
    args.splice(0, 1);

    if (!toKick) {
      return message.channel.send(couldntFindMemberEmbed)

    }

    if (toKick.id === message.author.id) {
      return message.channel.send(cantKickSelfEmbed)

    }

    if (!toKick.kickable) {
      return message.channel.send(roleNotHighEnoughEmbed)

    }

    const successKickEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setDescription(`** Kicked member:** ${toKick}
            ** Kicked by:** ${message.member}
            ** Reason:** ${args.join(' ') || 'No reason provided.'}`);

    toKick.kick(args.join(' ') || 'No reason provided.').then((v) => {
      message.channel.send(successKickEmbed);
    }).catch(console.log);
  },
};
