const { RichEmbed } = require('discord.js');
const fs = require('fs');
const blacklist = require('../../storage/blacklist.json');

module.exports = {
  name: 'blacklist',
  description: 'Adds or removes a guild to the bot blacklist.',
  run: (client, message) => {
    const defaultcolor = '#7dfce9';
    const rederrorcolor = '#fba6ff';
    const notEnoughPermission = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription('<a:crossmark1:742750308089856022> You don\'t have permission to use this command.');

    const blacklistDudes = [
      '651515978231971900',
      '522895569039917066',
      '403634335736922132',
      '522080989057515533',
      '319516807297892371',
      '709151479918755890',
    ];

    if (!blacklistDudes.includes(message.author.id)) {
      return message.channel.send(notEnoughPermission);
    }

    const successAddBlacklist = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('Blacklist')
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription('<a:check1:724756573896966235> Added this guild to the blacklist.');

    const successRemoveBlacklist = new RichEmbed()
      .setColor(defaultcolor)
      .setAuthor('Blacklist')
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription('<a:check1:724756573896966235> Removed this guild from the blacklist.');

    if (!blacklist.guilds.includes(message.guild.id)) {
      try {
        blacklist.guilds.push(message.guild.id);
        fs.writeFileSync('./storage/blacklist.json', JSON.stringify(blacklist, null, 4));
        message.channel.send(successAddBlacklist);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        blacklist.guilds.splice(blacklist.guilds.indexOf(message.guild.id), 1);
        fs.writeFileSync('./storage/blacklist.json', JSON.stringify(blacklist, null, 4));
        message.channel.send(successRemoveBlacklist);
      } catch (e) {
        console.log(e);
      }
    }
  },
};
