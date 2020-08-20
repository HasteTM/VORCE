const { RichEmbed } = require("discord.js");
const beautify = require("beautify"); 

module.exports = {
name: "eval",
description: "Evaluates the code you put in", usage: "<code to eval>",
run: async (client, message, args) => {

     let defaultcolor = `#7dfce9`

     let rederrorcolor = `#fba6ff`

     const noPermsUserEmbed = new RichEmbed()
     .setColor(rederrorcolor)
     .setDescription("<a:crossmark1:742750308089856022> You don't have access to this command.")


     let evalDudes = [
     "651515978231971900",
     "522895569039917066",
     "403634335736922132",
     "522080989057515533",
     "319516807297892371",
     "709151479918755890", 
     ]
     if (!evalDudes.includes(message.author.id)) {
        return message.channel.send(noPermsUserEmbed) 
        .then(m => m.delete(5000));
    }

    if (!args[0]) {
         message.channel.send("<a:crossmark1:742750308089856022> You need to evaluate something...")
              .then(m => m.delete(5000));

    }

    try {
    if (args.join(" ").toLowerCase().includes("token")) {
      return;
    }

    const toEval = args.join (" ");
    const evaluated = eval(toEval);

    let embed = new RichEmbed()
    .setColor(defaultcolor)
    .setAuthor("Eval")
    .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
    .addField("Evaluated:", evaluated);

    message.channel.send(embed);  

} catch (e) {

  let embed = new RichEmbed()
  .setColor("#c4121b")
  .setTitle('\:x: Error!')
  .setDescription(e);

  message.channel.send(embed);
       }
    }
}