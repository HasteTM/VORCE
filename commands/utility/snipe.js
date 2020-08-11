const { RichEmbed } = require('discord.js');
const snipeStorage = require('../../storage/snipe.json');

module.exports = {
  name: 'snipe',
  description: 'Displays the last deleted message.',
  run: (client, message) => {

    let defaultcolor = `#000000`

    const { channel } = message;
    const authorLogo = 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png';


    const snipedEmbed = (msg, author, timeStamp) => new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('Snipe')
      .setDescription(`Last message:\n**Deleted at:** ${timeStamp}\n**Author:** ${author}\n**Content:** ${msg}`)

    const nothingToSnipeEmbed = new RichEmbed()
      .setColor(defaultcolor)
      .setDescription('<a:crossmark1:742750308089856022> There is nothing to snipe in this channel.')
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const channelID = message.channel.id;

    if (snipeStorage[channelID] && snipeStorage[channelID].lastMsgCont.length > 0) {
      const { lastMsgCont, lastMsgAuth, delAt } = snipeStorage[channelID];
      channel.send(snipedEmbed(lastMsgCont, lastMsgAuth, delAt));
    } else {
      channel.send(nothingToSnipeEmbed);
    }
  },
};
