const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'ban',
  category: 'moderation',
  description: 'bans the member',
  usage: '<id | mention>',
  run: async (client, message, args) => {
    const noUserEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('⚠️ Please provide a person to ban.')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const noPermsUserEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("❗ You don't have permission to use this command.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const noPermsBotEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('❗ Bot does not have permission to ban members.')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const couldntFindMemberEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("⚠️ Couldn't find that member.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const cantBanSelfEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("⚠️ You can't ban yourself.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const roleNotHighEnoughEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor("⚠️ I can't ban that member due to role hierarchy.")
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const [user] = args[0];

    if (!user) {
      return message.channel.send(noUserEmbed)
        .then((m) => m.delete(5000));
    }

    if (!message.member.hasPermission('BAN_MEMBERS')) {
      return message.channel.send(noPermsUserEmbed)
        .then((m) => m.delete(5000));
    }

    if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
      return message.channel.send(noPermsBotEmbed)
        .then((m) => m.delete(5000));
    }
    const toBan = message.mentions.members.first() || message.guild.members.get(user);
    args.splice(0, 1);

    if (!toBan) {
      return message.channel.send(couldntFindMemberEmbed)

        .then((m) => m.delete(5000));
    }

    if (toBan.id === message.author.id) {
      return message.channel.send(cantBanSelfEmbed)
        .then((m) => m.delete(5000));
    }

    if (!toBan.bannable) {
      return message.channel.send(roleNotHighEnoughEmbed)
        .then((m) => m.delete(5000));
    }

    const successBanEmbed = new RichEmbed()
      .setAuthor('Ban', 'https://cdn.discordapp.com/attachments/651589704772485131/740315492023009431/work.png')
      .setColor('#7289da')
      .setDescription(`** Banned member:** ${toBan}
            ** Banned by:** ${message.member}
            ** Reason:** ${args.join(' ') || 'No reason provided.'}`);

    toBan.ban(args.join(' ') || 'No reason provided.').then((v) => {
      message.channel.send(successBanEmbed);
    }).catch(console.log);
  },
};
