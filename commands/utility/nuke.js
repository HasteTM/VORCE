const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'nuke',
  description: 'Nukes the current channel.',
  run: (client, message) => {

    let defaultcolor = `#7289da`

    const perms1 = new RichEmbed()
    .setColor(defaultcolor)
    .setAuthor("❗ You don't have permission to use this command.")
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL)

    const authorLogo = 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png';
    const newChannelEmbed = new RichEmbed()
      .setColor('#36393f')
      .setAuthor(`${message.author.username} Successfully Nuked the Channel.`)
      .setImage('https://cdn.discordapp.com/attachments/651589704772485131/741823383955832883/SHKS.gif')

    if (!(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS'))) {
        return message.channel.send(perms1)
    }
    const textChannel = message.channel;
    const lastTextChannelPos = message.channel.calculatedPosition;

    const handleResolvedChannel = (channel) => {
      channel.setPosition(lastTextChannelPos);
      channel.send(newChannelEmbed);
    }

    textChannel.clone().then(handleResolvedChannel).catch(e => console.log(e));
    setTimeout(() => {
      textChannel.delete();
    }, 100);
  }
};