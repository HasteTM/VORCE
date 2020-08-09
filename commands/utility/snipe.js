const { RichEmbed } = require('discord.js');
const snipeStorage = require('../../storage/snipe.json');

module.exports = {
  name: 'snipe',
  description: 'Displays the last deleted message.',
  run: (client, message) => {
    const { channel } = message;
    const authorLogo = 'https://media.discordapp.net/attachments/651589704772485131/740315645106978876/hum.png';

    const noPermsEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Snipe', authorLogo)
      .setDescription(`❗ You don't have permission to use this command.`)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    if (!(message.member.hasPermission('ADMINISTRATOR'))) {
      return channel.send(noPermsEmbed);
    }

    const snipedEmbed = (msg, author, timeStamp) => new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Snipe', authorLogo)
      .setDescription(`Last message:\n**Deleted at:** ${timeStamp}\n**Author:** ${author}\n**Content:** ${msg}`)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL);

    const nothingToSnipeEmbed = new RichEmbed()
      .setColor('#7289da')
      .setAuthor('Snipe', authorLogo)
      .setDescription('⛔ There is nothing to snipe in this channel.')
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
