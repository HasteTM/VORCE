const { RichEmbed } = require("discord.js");

module.exports = {

    name: "addrole",

    category: "moderation",

    description: "adds members role",


    run: async (client, message, args) => {


  if(!message.member.hasPermission("MANAGE_MEMBERS"))
  return message.reply("Sorry pal, you can't do that.");

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("Couldn't find that user.");

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specify a role!");

  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`ROLES UPDATED | You have been given the role ${gRole.name}.`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`${gRole.name} has been given to <@${rMember.id}>. Failed to DM User (DM'S are Disabled)`)
  }
}

    }
