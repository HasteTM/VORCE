const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'ban',
  category: 'moderation',
  description: 'bans the member',
  usage: '<id | mention>',
  run: async (client, message, args) => {

    let defaultcolor = `#000000`

    const noUserEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('⚠️ Please provide a person to ban.')


    const noPermsUserEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor("❗ You don't have permission to use this command.")


    const noPermsBotEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('❗ Bot does not have permission to ban members.')


    const couldntFindMemberEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor("⚠️ Couldn't find that member.")


    const cantBanSelfEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor("⚠️ You can't ban yourself.")


    const roleNotHighEnoughEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor("⚠️ I can't ban that member due to role hierarchy.")


    const [user] = args[0];

    if (!user) {
      return message.channel.send(noUserEmbed)

    }

    if (!message.member.hasPermission('BAN_MEMBERS')) {
      return message.channel.send(noPermsUserEmbed)

    }

    if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
      return message.channel.send(noPermsBotEmbed)

    }
    const toBan = message.mentions.members.first() || message.guild.members.get(user);
    args.splice(0, 1);

    if (!toBan) {
      return message.channel.send(couldntFindMemberEmbed)


    }

    if (toBan.id === message.author.id) {
      return message.channel.send(cantBanSelfEmbed)

    }

    if (!toBan.bannable) {
      return message.channel.send(roleNotHighEnoughEmbed)

    }

    const successBanEmbed = new RichEmbed()
      .setAuthor('Ban')
      .setColor('#000000')
      .setDescription(`** Banned member:** ${toBan}
            ** Banned by:** ${message.member}
            ** Reason:** ${args.join(' ') || 'No reason provided.'}`);

    toBan.ban(args.join(' ') || 'No reason provided.').then((v) => {
      message.channel.send(successBanEmbed);
    }).catch(console.log);
  },
};
