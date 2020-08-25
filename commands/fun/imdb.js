const { RichEmbed } = require("discord.js");
const imdb = require('imdb-api');

module.exports = {

    name: "imdb",

    description: "imdb command",

    run: async (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#F04947`

        const msg1 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> Please provide a valid movie / series name.")

    if(!args.length) {
        return message.channel.send(msg1)
    }

    const imob = new imdb.Client({apiKey: '5e36f0db'})

    let movie = await imob.get({'name': args.join(' ')})

    let embed = new RichEmbed()
    .setAuthor('IMDB')
    .setTitle(movie.title)
    .setColor(defaultcolor)
    .setImage(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField(`Country`, movie.country, true)
    .addField(`Languages`, movie.languages, true)
    .addField(`Genres`, movie.genres, true)
    .addField(`Type`, movie.type, true)

    message.channel.send(embed);
}
}