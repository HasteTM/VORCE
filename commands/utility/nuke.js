const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'nuke',
  description: 'Nukes the current channel.',
  run: (client, message) => {

    let defaultcolor = `#000000`

    let rederrorcolor = `#c4121b`

    const perms1 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")


    const newChannelEmbed = new RichEmbed()
      .setColor('#36393f')
      .setTitle(`<a:checkmark1:742750252666191902> ${message.author.username} Successfully Nuked the Channel.`)
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