const { RichEmbed } = require("discord.js");

module.exports = {

    name: "coinflip",

    description: "format",

    run: (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`

        const cmsg1 = new RichEmbed()
        .setColor(rederrorcolor)
        .setAuthor('CoinFlip')
        .setDescription('<a:coinflip2:746102229416542309> Heads!')

        const cmsg2 = new RichEmbed()
        .setColor(rederrorcolor)
        .setAuthor('CoinFlip')
        .setDescription('<a:coinflip2:746102229416542309> Tails!')

    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
        message.channel.send(cmsg1);
    }
    else {
        message.channel.send(cmsg2);
    }

    }
}
