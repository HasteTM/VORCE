const { Client, Collection} = require("discord.js");

const MusicBot = require("vorce-music-module");

const { config } = require("dotenv");


const client = new Client({

    disableEveryone: true

})

client.commands = new Collection();

client.aliases = new Collection();

config({

    path: __dirname + "/.env"

});

["command"].forEach(handler => {

    require(`./handlers/${handler}`)(client);

});

client.on("ready", () => {

    console.log(` ${client.user.username} is now appearing online, in ${client.guilds.size} servers!`);
    client.user.setStatus('dnd');
    const activities_list = [
    `${client.users.size} users`,
    "for v!help",
    `${client.guilds.size} servers!`,
    ]; // creates an arraylist containing phrases you want your bot to switch through.

    setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(`${activities_list[index]}`, { type: "WATCHING" });
    }, 10000);
});

client.on("message", async message => {

    const prefix = "v!";

    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);

    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)

        command.run(client, message, args);
});
//music module below do not change
const bot = new MusicBot({
    token: `${process.env.token}`,
    ytApiKey: `${process.env.YTapikey}`,
    prefix: `v!`,
    game: ' '
});

bot.run(); // Run the music module
client.login(process.env.token);
