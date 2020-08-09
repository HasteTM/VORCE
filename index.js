/* eslint-disable max-len */
const Discord = require('discord.js');
const MusicBot = require('vorce-music-module');
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const snipeStorage = require('./storage/snipe.json');

const client = new Client({
  disableEveryone: true,
});

client.commands = new Collection();
client.aliases = new Collection();

config({
  path: `${__dirname}/.env`,
});

['command'].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
  console.log(`${client.user.username} is now appearing online, in ${client.guilds.size} servers!`);
  client.user.setStatus('dnd');
  const activitesList = [
    `${client.users.size} users`,
    'for v!help',
    `${client.guilds.size} servers!`,
  ]; // creates an arraylist containing phrases you want your bot to switch through.

  setInterval(() => {
    // generates a random number between 1 and the length of the activities array (in this case 5).
    const index = Math.floor(Math.random() * (activitesList.length - 1) + 1);
    client.user.setActivity(`${activitesList[index]}`, { type: 'WATCHING' });
  }, 10000);
});

client.on('message', async (message) => {
  if (message.channel.type === 'dm') {
    const dmEmbed = new Discord.RichEmbed()
      .setFooter(`${message.author.username}#${message.author.discriminator}: ${message.content}`, message.author.avatarURL);
    client.channels.get('740001399877795921').send(dmEmbed);
  }
  const prefix = '-';

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (message.author.bot || !message.guild || !message.content.startsWith(prefix) || cmd.length < 1) {
    return;
  }

  let { member } = message;
  if (!member) {
    member = await message.guild.fetchMember(message);
  }

  let command = client.commands.get(cmd);
  if (!command) {
    command = client.commands.get(client.aliases.get(cmd));
  } else {
    command.run(client, message, args);
  }
});

client.on('messageDelete', (message) => {
  const timeStamp = new Date().toLocaleString();

  if (message.channel.type !== 'text' || message.author.bot) {
    return;
  }

  const snipeStorageFile = './storage/snipe.json';
  snipeStorage[message.channel.id] = { lastMsgCont: `${message.content}`, lastMsgAuth: `${message.author.tag}`, delAt: `${timeStamp}` };

  fs.writeFileSync(snipeStorageFile, JSON.stringify(snipeStorage, null, 4));
});

// music module below do not change
const bot = new MusicBot({
  token: `${process.env.token}`,
  ytApiKey: `${process.env.YTapikey}`,
  prefix: '-',
  game: ' ',
});

bot.run(); // Run the music module
client.login(process.env.token);
