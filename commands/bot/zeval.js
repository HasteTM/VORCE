const { RichEmbed } = require("discord.js");
const beautify = require("beautify"); 

module.exports = {
name: "zeval",
aliases: ["ze"],
description: "Evaluates the code you put in", usage: "<code to eval>",
run: async (client, message, args) => {

     let defaultcolor = `#7289da`

     if (message.author.id !== "403634335736922132") {
        return message.channel.send("<a:crossmark1:742750308089856022> You're not a Vorce Admin or a Developer!") 
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
    .setAuthor("Eval", "https://cdn.discordapp.com/attachments/651589704772485131/740339977195618367/72f9c1232011ff2836495dbca55604d7.png")
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