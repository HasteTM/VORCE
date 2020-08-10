
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "beo",


    description: "pings bingo",

    run: (client, message, args) => {



message.channel.send(`<@364968517935562753>`)
.then(m => m.delete(10000));
    }

}
