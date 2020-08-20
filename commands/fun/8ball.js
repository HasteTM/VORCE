const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");

module.exports = {

    name: "8ball",

    description: "8ball command",

    run: (client, message, args) => {

        let defaultcolor = `#7dfce9`

        let rederrorcolor = `#fba6ff`

        const q1 = new RichEmbed()
        .setColor(rederrorcolor)
        .setDescription("<a:crossmark1:742750308089856022> Please ask a question.")

    if(!args[0]) return message.channel.send(q1);
    let replies = [
        'Maybe.',
	    'Certainly not.',
	    'I hope so.',
	    'Not in your wildest dreams.',
    	'There is a good chance.',
	    'Quite likely.',
    	'I think so.',
    	'I hope not.',
    	'I hope so.',
    	'Never!',
    	'Pfft.',
	    'Sorry, bucko.',
    	'Hell, yes.',
    	'Hell to the no.',
    	'The future is bleak.',
	    'The future is uncertain.',
	    'I would rather not say.',
    	'Who cares?',
    	'Possibly.',
    	'Never, ever, ever.',
    	'There is a small chance.',
    	'Yes!',
    	'lol no.',
    	'There is a high probability.',
    	'What difference does it makes?',
    	'Not my problem.',
        'Ask someone else.'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(' ');

    const embed1 = new RichEmbed()
    .setAuthor(`8Ball`)
    .setColor(defaultcolor)
    .addField(':8ball: Q:', question)
    .addField(':8ball: A:', replies[result]);

    message.channel.send(embed1);
}
}