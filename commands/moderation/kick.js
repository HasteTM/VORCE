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
      .setTitle("Kick")
      .setDescription('<:cancel:744610141588160562> Please provide a person to kick.')
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)

    const noPermsUserEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setTitle("Kick")
      .setDescription("<:cancel:744610141588160562> You don't have permission to use this command.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)

    const noPermsBotEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setTitle("Kick")
      .setDescription('<:cancel:744610141588160562> Bot does not have permission to kick members.')
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)

    const couldntFindMemberEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setTitle("Kick")
      .setDescription("<:cancel:744610141588160562> Couldn't find that member.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)

    const cantKickSelfEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setTitle("Kick")
      .setDescription("<:cancel:744610141588160562> You can't kick yourself.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)

    const roleNotHighEnoughEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setTitle("Kick")
      .setDescription("<:cancel:744610141588160562> I can't kick that member due to role hierarchy.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)


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
      .setAuthor('Kick')
      .setColor(defaultcolor)
      .setDescription(`** Kicked member:** ${toKick}
            ** Kicked by:** ${message.member}
            ** Reason:** ${args.join(' ') || 'No reason provided.'}`);

    toKick.kick(args.join(' ') || 'No reason provided.').then((v) => {
      message.channel.send(successKickEmbed);
    }).catch(console.log);
  },
};
