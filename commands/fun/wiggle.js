
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "wiggle",

    description: "wiggle",

    run: (client, message, args) => {

        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send('No wiggle fo yo')
            .then(m => m.delete(5000));
          }


message.channel.send(`

Wiggle
 Wiggle
  Wiggle
   Wiggle
    Wiggle
     Wiggle
      Wiggle
       Wiggle
        Wiggle
        Wiggle
        Wiggle
       Wiggle
      Wiggle
     Wiggle
    Wiggle
   Wiggle
  Wiggle
 Wiggle
Wiggle
Wiggle
Wiggle
Wiggle
Wiggle
 Wiggle
  Wiggle
   Wiggle
    Wiggle
     Wiggle
      Wiggle
       Wiggle
        Wiggle
        Wiggle
        Wiggle
       Wiggle
      Wiggle
     Wiggle
    Wiggle
   Wiggle
  Wiggle
 Wiggle
Wiggle
Wiggle

`)

    }

}
