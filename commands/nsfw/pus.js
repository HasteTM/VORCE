const { RichEmbed } = require("discord.js");
const superagent = require('superagent')

module.exports = {

    name: "pussy",

    description: "nsfw commands",

    run: async (client, message, args) => {

  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pussy'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("This isn't a NSFW channel!")
  }
}
}