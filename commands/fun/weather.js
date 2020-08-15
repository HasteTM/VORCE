const { RichEmbed } = require("discord.js");
const weather = require("weather-js");


module.exports = {

    name: "weather",

    description: "shows the weahter.",

    run: (client, message, args) => {

        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if(err) message.channel.send(err)

            var current = result[0].current;
            var location = result[0].location;

            const embed = new RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`☁️ - Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageURL)
            .setColor("000000")
            .addField('> Timezone', `UTC${location.timezone}`, true)
            .addField("> Degree Type", location.degreetype, true)
            .addField('> Temperature', `${current.temperature} Degrees`, true)
            .addField('> Feels Like', `${current.feelslike} Degrees`, true)
            .addField('> Winds', current.winddisplay, true)
            .addField("> Humidity", `${current.humidity}%`, true)
            .setTimestamp()
            .setFooter("Invite Vorce Bot.")

            message.channel.send(embed)
        })


    }
}