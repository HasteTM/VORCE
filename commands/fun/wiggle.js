
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "wiggle",

    description: "wiggle",

    run: (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('Only cool kids have access to this command :/ and beanlet ofc')
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
.then(m => m.delete(3000));
    }

}