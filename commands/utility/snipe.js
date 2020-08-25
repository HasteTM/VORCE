const { RichEmbed } = require('discord.js');
const snipeStorage = require('../../storage/snipe.json');

module.exports = {
  name: 'snipe',
  description: 'Displays the last deleted message.',
  run: (client, message) => {


    let defaultcolor = `#7dfce9`

    let rederrorcolor = `#F04947`


    const { channel } = message;


    const snipedEmbed = (msg, author, timeStamp) => new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('Snipe')
      .setDescription(`Last message:\n**Deleted at:** ${timeStamp}\n**Author:** ${author}\n**Content:** ${msg}`)

    const nothingToSnipeEmbed = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> There is nothing to snipe in this channel.');


    const channelID = message.channel.id;

    if (snipeStorage[channelID] && snipeStorage[channelID].lastMsgCont.length > 0) {
      const { lastMsgCont, lastMsgAuth, delAt } = snipeStorage[channelID];
      channel.send(snipedEmbed(lastMsgCont, lastMsgAuth, delAt));
    } else {
      channel.send(nothingToSnipeEmbed);
    }
  },
};
