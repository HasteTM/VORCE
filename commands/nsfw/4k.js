const { RichEmbed } = require("discord.js");
const superagent = require('superagent')

module.exports = {

    name: "4k",

    description: "nsfw commands",

    run: async (client, message, args) => {

  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("This isn't a NSFW channel!")
  }
}
}