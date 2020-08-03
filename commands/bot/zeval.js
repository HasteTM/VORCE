const { RichEmbed } = require("discord.js");
const beautify = require("beautify"); 

module.exports = {
name: "zeval",
aliases: ["ze"],
description: "Evaluates the code you put in", usage: "<code to eval>",
run: async (client, message, args) => {
     if (message.author.id !== "403634335736922132") {
        return message.channel.send("You're not a Vorce Admin or a Developer!") 
        .then(m => m.delete(5000));
    }

    if (!args[0]) {
         message.channel.send("You need to evaluate something...")
              .then(m => m.delete(5000));

    }

    try {
    if (args.join(" ").toLowerCase().includes("token")) {
      return;
    }

    const toEval = args.join (" ");
    const evaluated = eval(toEval);

    let embed = new RichEmbed()
    .setColor("#5eff00")
    .setAuthor("Eval", "https://cdn.discordapp.com/attachments/664927615034982410/734857644464013414/LEGEND_01.gif")
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