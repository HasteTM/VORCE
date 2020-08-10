
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "beo",

    aliases: ["androidslayer"],

    description: "pings bingo",

    run: (client, message, args) => {



message.channel.send(`<@364968517935562753>`)
.then(m => m.delete(10000));
    }

}
