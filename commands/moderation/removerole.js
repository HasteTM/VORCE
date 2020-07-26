const { RichEmbed } = require("discord.js");

module.exports = {

    name: "removerole",

    category: "moderation",

    description: "removes users role",


    run: async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS"))
            return message.reply("❌ You don't have permissions to use this command.");

  
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("Couldn't find that user.");

  let role = args.join(" ").slice(22);

  if(!role) return message.reply("Specify a role!");

  let gRole = message.guild.roles.find(`name`, role);

  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`ROLES UPDATED | Your role ${gRole.name} has been taken.`)

  }catch(e){

    message.channel.send(`Removed ${gRole.name} from <@${rMember.id}> . Failed to DM User (DM'S are Disabled)`)

  }
}

}