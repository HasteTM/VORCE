const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'kick',
  category: 'moderation',
  description: 'Kicks the member',
  usage: '<id | mention>',

  run: async (client, message, args) => {
    const noUserEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('⚠️ Please provide a person to kick.')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const noPermsUserEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("❗ You don't have permission to use this command.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const noPermsBotEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('❗ Bot does not have permission to kick members.')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const couldntFindMemberEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("⚠️ Couldn't find that member.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const cantKickSelfEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("⚠️ You can't kick yourself.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const roleNotHighEnoughEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("⚠️ I can't kick that member due to role hierarchy.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const [user] = args;

    if (!user) {
      return message.channel.send(noUserEmbed)
        .then((m) => m.delete(5000));
    }

    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.channel.send(noPermsUserEmbed)
        .then((m) => m.delete(5000));
    }

    if (!message.guild.me.hasPermission('KICK_MEMBERS')) {
      return message.channel.send(noPermsBotEmbed)
        .then((m) => m.delete(5000));
    }

    const toKick = message.mentions.members.first() || message.guild.members.get(user);
    args.splice(0, 1);

    if (!toKick) {
      return message.channel.send(couldntFindMemberEmbed)
        .then((m) => m.delete(5000));
    }

    if (toKick.id === message.author.id) {
      return message.channel.send(cantKickSelfEmbed)
        .then((m) => m.delete(5000));
    }

    if (!toKick.kickable) {
      return message.channel.send(roleNotHighEnoughEmbed)
        .then((m) => m.delete(5000));
    }

    const successKickEmbed = new RichEmbed()
      .setAuthor('Kick', 'https://cdn.discordapp.com/attachments/651589704772485131/740315492023009431/work.png')
      .setColor('#7289da')
      .setDescription(`** Kicked member:** ${toKick}
            ** Kicked by:** ${message.member}
            ** Reason:** ${args.join(' ') || 'No reason provided.'}`);

    toKick.kick(args.join(' ') || 'No reason provided.').then((v) => {
      message.channel.send(successKickEmbed);
    }).catch(console.log);
  },
};
