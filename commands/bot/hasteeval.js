const { RichEmbed } = require("discord.js");
const beautify = require("beautify"); 

module.exports = {
name: "heval",
aliases: ["he"],
description: "Evaluates the code you put in", usage: "<code to eval>",
run: async (client, message, args) => {
     if (message.author.id !== "651515978231971900") {
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
    .setColor("#7289da")
    .setAuthor("Eval", 'https://cdn.discordapp.com/attachments/651589704772485131/740315620696129676/bots.png')
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