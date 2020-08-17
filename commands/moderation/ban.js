const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'ban',
  category: 'moderation',
  description: 'bans the member',
  usage: '<id | mention>',
  run: async (client, message, args) => {

    let defaultcolor = `#7dfce9`

    let rederrorcolor = `#fba6ff`

    const noUserEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<:cancel:744610141588160562> Please provide a person to ban.')
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)


    const noPermsUserEmbed = new RichEmbed()
    .setTitle("Ban")
      .setColor(rederrorcolor)
      .setDescription("<:cancel:744610141588160562> You don't have permission to use this command.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)

    const noPermsBotEmbed = new RichEmbed()
    .setTitle("Ban")
      .setColor(rederrorcolor)
      .setDescription('<:cancel:744610141588160562> Bot does not have permission to ban members.')
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)

    const couldntFindMemberEmbed = new RichEmbed()
    .setTitle("Ban")
      .setColor(rederrorcolor)
      .setDescription("<:cancel:744610141588160562> Couldn't find that member.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)


    const cantBanSelfEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription("<:cancel:744610141588160562> You can't ban yourself.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)


    const roleNotHighEnoughEmbed = new RichEmbed()
      .setTitle("Ban")
      .setColor(rederrorcolor)
      .setDescription("<:cancel:744610141588160562> I can't ban that member due to role hierarchy.")
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL)


    const [user] = args;

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
      .setColor('#7dfce9')
      .setDescription(`** Banned member:** ${toBan}
            ** Banned by:** ${message.member}
            ** Reason:** ${args.join(' ') || 'No reason provided.'}`);

    toBan.ban(args.join(' ') || 'No reason provided.').then((v) => {
      message.channel.send(successBanEmbed);
    }).catch(console.log);
  },
};
