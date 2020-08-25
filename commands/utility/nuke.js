const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'nuke',
  description: 'Nukes the current channel.',
  run: (client, message) => {


    let defaultcolor = `#7dfce9`

    let rederrorcolor = `#F04947`

    const perms1 = new RichEmbed()
    .setColor(rederrorcolor)
    .setDescription("<a:crossmark1:742750308089856022> You don't have permission to use this command.")

    const nuke1 = new RichEmbed()
    .setColor(defaultcolor)
    .setDescription(`<a:check1:724756573896966235> Successfully Nuked the Channel.`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()

    if (!(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS'))) {
        return message.channel.send(perms1)
    }
    const textChannel = message.channel;
    const lastTextChannelPos = message.channel.calculatedPosition;

    const handleResolvedChannel = (channel) => {
      channel.setPosition(lastTextChannelPos);
      channel.send(nuke1);
    }

    textChannel.clone().then(handleResolvedChannel).catch(e => console.log(e));
    setTimeout(() => {
      textChannel.delete();
    }, 100);
  }
};