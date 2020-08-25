const { RichEmbed } = require("discord.js");
const superagent = require('superagent')

module.exports = {

  name: "4k",

  description: "nsfw commands",

  run: async (client, message, args) => {

    const defaultcolor = `#7dfce9`;
    const rederrorcolor = `#F04947`;


      const embed2 = new RichEmbed()
      .setColor(rederrorcolor)
      .setDescription("<a:crossmark1:742750308089856022> This isn't a NSFW channel!")

    if (message.channel.nsfw === true) {
      superagent.get('https://nekobot.xyz/api/image')
        .query({ type: '4k' })
        .end((err, response) => {

          const embed1 = new RichEmbed()
          .setColor(defaultcolor)
          .setAuthor("4k")
          .setImage(response.body.message)

          message.channel.send(embed1);
        });
    } else {
      message.channel.send(embed2)
    }
  }
}