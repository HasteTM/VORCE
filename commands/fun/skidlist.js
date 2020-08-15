
const { RichEmbed } = require("discord.js");


module.exports = {

    name: "skidlist",

    description: "shows the top skids",

    run: (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:crossmark1:742750308089856022> Only cool kids have access to this command :/')
            .then(m => m.delete(5000));
          }


message.channel.send(`

First Place Skid: Chaos
Second Place Skid: Drqgs
Third Place Skid: Boner

Dm Haste to apply.
*its a joke*
`)
    }

}
