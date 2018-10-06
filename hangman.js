const Discord = require("discord.js");
const client = new Discord.Client();
const token = (process.env.token);

var letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["fortnite", "vodka", "funny", "jeme", "kemz", "cat", "zipsi", "fruit", "abyss", "galaxy", "discord", "stronghold", "town", "tilted towers", "tomato town", "ninja", "jukebox", "unknown", "brick", "toy", "trap", "mission", "monkey", "neighborhood", "suomi", "lapinlahti", "finland", "canal", "calm", "breeze", "memory", "zoo", "shake",
              "hunter", "palace", "fireplace", "rush", "cycle", "jelly", "syndrome", "wave", "wizard", "office", "cargo", "damage", "cookie", "computer", "pizza", "hamburger", "garage", "image", "topaz", "diamond", "scratch", "keyhole", "adult", "almost", "alone", "appointment", "architect", "ball", "beer", "board", "bottle", "broken", "chapter",
              "commit", "complain", "concept", "culture", "daughter", "designer", "explosion", "father", "flower", "tower", "forest", "formula", "flashlight", "freedom", "friendship", "future", "general", "global", "happy", "highway", "hospital", "hunter", "island", "king", "laboratory", "leader", "machine", "manager", "master", "missile", "movie",
              "normal", "north", "offensive", "opponent"]
function randWord() {
	return words[Math.floor(Math.random() * words.length)];
};
var games = [];

var stages = [`\`\`\`
/---
|   
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|   |
| 
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|  /
|
\`\`\`
`, `\`\`\`
/---|
|   o   You died!
|  /|\\
|  / \\
|
\`\`\`
`];



function generateMessage(phrase, guesses) {
	var s = "";
	for(var i = 0; i < phrase.length; i++) {
		if(phrase[i] == ' ')
			s += " ";
		else {
			var c = phrase[i];
			if(guesses.indexOf(c) == -1)
				c = "\\_";
			s += "__" + c + "__ ";
		}
	}
	return s;
}

function nextLetter(message, index, word) {
    message.react(letters[index]).then(r => {
		index++;
		if(index < letters.length) {
			if(index == 13) {
				message.channel.send(generateMessage(word, [])).then(m => {
					games.push({
						stage: 0,
						msg0: message,
						msg1: m,
						phrase: word,
						guesses: []
					});
					nextLetter(m, index);
				});
			} else {
				nextLetter(message, index, word);
			}
		}
	});
}

client.on('messageReactionAdd', (reaction, user) => {
	var msg = reaction.message;
	if(!user.bot) {
		for(var i = 0; i < games.length; i++) {
			var game = games[i];
			if((msg.id == game.msg0.id || msg.id == game.msg1.id) && game.stage < stages.length) {
				var letter = unicode[letters.indexOf(reaction.emoji.name)];
				
				reaction.fetchUsers().then(usrs => {
					var reactors = usrs.array();
					var remove_next = function(index) {
						if(index < reactors.length)
							reaction.remove(reactors[index]).then(() => remove_next(index + 1));
					};
					
					remove_next(0);
				});
				
				if(game.guesses.indexOf(letter) == -1) {
					game.guesses.push(letter);
					if(game.phrase.indexOf(letter) == -1) {
						game.stage ++;
						game.msg0.edit(stages[game.stage]);
					} else {
						var sik = true;
						for(var j = 0; j < game.phrase.length; j++) {
							var c = game.phrase[j];
							if(c != ' ' && game.guesses.indexOf(c) == -1) {
								sik = false;
							}
						}
						
						if(sik) {
							game.msg0.edit(stages[game.stage].replace("o", "o"));
						}
						
						game.msg1.edit(generateMessage(game.phrase, game.guesses));
					}
				}
			}
			games[i] = game;
		}
	}
});

client.on('message', msg => {
    if(msg.content.startsWith("!hangman")) {
			var word = randWord()
                msg.channel.send(stages[0]).then(m => {
                    nextLetter(m, 0, word);
                });
            
        }
});

client.login(token);
