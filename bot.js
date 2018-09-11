const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const passes_ = 1;
const version = ("1.0");
const moment = require('moment');
const arrowRight = ":arrow_right:";
const authorID = 199651843800825856;
const symbols = new RegExp(/!/);
const blue = (3447003);
const red = (0xff0000);
const green = (0x00cd00);
const TicTacToe = require("./ttt.js");
const money = require('discord-money');
const DatabaseScripts = require('./tools.js');
const channel = new Discord.Channel(client);
const sql = require("sqlite");
sql.open("./score.sqlite");
require('./hangman.js');

client.on("ready", () => {
  client.user.setActivity(`${prefix}help`);
  console.log("Done!");
});


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

client.on('message', msg => {

	  if (msg.content.toLowerCase().startsWith('!remindme')) {
		var message = msg;
		try {
			
			var returntime;
			var timemeasure;
			msg = msg.content.split(' ');
			console.log('Message recieved from ' + message.author.id + ' at ' + Date.now().toString());
			timemeasure = msg[1].substring((msg[1].length - 1), (msg[1].length))
			returntime = msg[1].substring(0, (msg[1].length - 1))

			switch (timemeasure) {
				case 's':
					returntime = returntime * 1000;
					break;

				case 'm':
					returntime = returntime * 1000 * 60;
					break;

				case 'h':
					returntime = returntime * 1000 * 60 * 60;
					break;

				case 'd':
					returntime = returntime * 1000 * 60 * 60 * 24;
					break;

				default:
					returntime = returntime * 1000;
					break;
			}

			
			client.setTimeout(function () {
				
				msg.shift();
				msg.shift();

				
				var content = msg.join();
				content = content.replaceAll(',', ' ');    
				try { 
					message.channel.type === (`"dm"`) + message.author.send(content) }catch (err) {
						message.reply('Cannot send Direct Messages to you');
					}
				console.log('Message sent to ' + message.author.id + ' at ' + Date.now().toString());
			}, returntime)
		} catch (e) {
			message.reply("!remindme <time> <message>\n Reminds you with a direct message with your custom time and message \n m - minutes, s - seconds, d - days. \n **Example:** !remindme 10m It's time to go eat!");
			console.error(e.toString());
		}
	} else if (msg.content.toLowerCase().startsWith(`${prefix}remind`)) {
		var message = msg;
		try {
			
			var returntime;
			var timemeasure;
			msg = msg.content.split(' ');
			console.log('Message recieved from ' + message.author.id + ' at ' + Date.now().toString());

			timemeasure = msg[1].substring((msg[1].length - 1), (msg[1].length))
			returntime = msg[1].substring(0, (msg[1].length - 1))

			switch (timemeasure) {
				case 's':
					returntime = returntime * 1000;
					break;

				case 'm':
					returntime = returntime * 1000 * 60;
					break;

				case 'h':
					returntime = returntime * 1000 * 60 * 60;
					break;

				case 'd':
					returntime = returntime * 1000 * 60 * 60 * 24;
					break;

				default:
					returntime = returntime * 1000;
					break;
			}

			client.setTimeout(function () {

				msg.shift();
				msg.shift();
				var content = msg.join();
				content = content.replaceAll(',', ' ');
				message.reply(content);
				console.log('Message sent to ' + message.author.id + ' at ' + Date.now().toString());
			}, returntime)
		} catch (e) {
			message.reply(`${prefix}remind <time> <message>\n Reminds you in the channel with your custom time and message \n m - minutes, s - seconds, d - days. \n **Example:** ${prefix}remind 10m It's time to go sleep!`);
			console.error(e.toString());
		}

	} 
	
});


new TicTacToe({
	api_token: ("NDg1MDk1MTg3MDQzOTc1MTgz.DmrnUg.apeigamAy1yD5fcICy7NBqMjUI8"),
	channel: "tictactoe",
	command: "tictactoe",
	auto_clear: true,
	messages: {
		welcome: "Welcome to my Tic-Tac-Toe game! \n Start a game with \`!tictactoe`\ ",
		end_victory: "%player% won the game!"
	}
})


const hug = ["https://cdn.discordapp.com/attachments/199659095316234241/487270429866590218/IMG_20180808_122814.jpg", "https://i.imgur.com/wOmoeF8.gif", "https://i.imgur.com/r9aU2xv.gif", "https://i.imgur.com/ntqYLGl.gif", "https://i.imgur.com/4oLIrwj.gif", "https://i.imgur.com/niD8tPb.gif", "https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705", "https://media1.tenor.com/images/59804cda426c24178163d6a7b20eb057/tenor.gif?itemid=3532036", "https://media1.tenor.com/images/ff8a2ea033a2f87a35d895eebd09cbe8/tenor.gif?itemid=9856637", "https://media1.tenor.com/images/107e45330bc276137ed2b8fc6c93ecaa/tenor.gif?itemid=10309745", "https://media1.tenor.com/images/de06f8f71eb9f7ac2aa363277bb15fee/tenor.gif?itemid=10426436", "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif?itemid=7324587", "https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif?itemid=5166500",
			 "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630", "https://media1.tenor.com/images/34a1d8c67e7b373de17bbfa5b8d35fc0/tenor.gif?itemid=8995974", "https://media1.tenor.com/images/54e97e0cdeefea2ee6fb2e76d141f448/tenor.gif?itemid=11378437", "https://media1.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif?itemid=7552077", "https://media1.tenor.com/images/460c80d4423b0ba75ed9592b05599592/tenor.gif?itemid=5044460", "https://media1.tenor.com/images/44b4b9d5e6b4d806b6bcde2fd28a75ff/tenor.gif?itemid=9383138", "https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432", "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589", "https://media1.tenor.com/images/72627a21fc298313f647306e6594553f/tenor.gif?itemid=9096291", "https://media1.tenor.com/images/adbfbc5c70e669c269ef8d4af1508242/tenor.gif?itemid=12449173",
			 "https://media1.tenor.com/images/e98eb2322cb545b99566f9647fd15a2d/tenor.gif?itemid=10942016", "https://media1.tenor.com/images/b214bd5730fd2fdfaae989b0e2b5abb8/tenor.gif?itemid=12307787", "https://media1.tenor.com/images/1b66ce5c8ab6cbc5a76f676c682fe18a/tenor.gif?itemid=7552062", "https://media1.tenor.com/images/ee95b90c9461219ff77136d6534d1f6b/tenor.gif?itemid=11050300", "https://media1.tenor.com/images/38ff71787d331e2c8c7326846e718c4b/tenor.gif?itemid=12088250" ]
const kiss = ["https://i.imgur.com/sGVgr74.gif", "https://i.imgur.com/TItLfqh.gif", "https://i.imgur.com/lmY5soG.gif", "https://i.imgur.com/e0ep0v3.gif", "https://i.imgur.com/wQjUdnZ.gif", "https://i.imgur.com/II1bakc.gif", "https://i.imgur.com/eKcWCgS.gif", "https://i.imgur.com/FozOXkB.gif", "https://i.imgur.com/Uow8no2.gif", "https://i.imgur.com/agdhkfE.gif", "https://i.imgur.com/pDScNqs.gif", "https://i.imgur.com/gWIm5bK.gif", "https://i.imgur.com/GoJvaea.gif", "https://i.imgur.com/J1GHyBL.gif", "https://i.imgur.com/JZLaOA2.gif", "https://i.imgur.com/xXWh0Mf.gif", "https://i.imgur.com/it7zZUq.gif", "https://i.imgur.com/lfa1j65.gif", "https://i.imgur.com/x08y0Wd.gif", "https://media1.tenor.com/images/40711a5b00fcf9918ddef1aa483d993f/tenor.gif?itemid=11737410", "https://media1.tenor.com/images/68d07bdc2be6477c71f592f4325f52e4/tenor.gif?itemid=12434266", "https://media1.tenor.com/images/896519dafbd82b9b924b575e3076708d/tenor.gif?itemid=8811697"]
const pat = ["https://i.imgur.com/WyMHuyL.gif", "https://i.imgur.com/UWbKpx8.gif", "https://i.imgur.com/4ssddEQ.gif", "https://i.imgur.com/2k0MFIr.gif", "https://media1.tenor.com/images/54722063c802bac30d928db3bf3cc3b4/tenor.gif?itemid=8841561", "https://media1.tenor.com/images/005e8df693c0f59e442b0bf95c22d0f5/tenor.gif?itemid=10947495", "https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286", "https://media1.tenor.com/images/291ea37382e1d6cd33349c50a398b6b9/tenor.gif?itemid=10204936", "https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819", "https://media1.tenor.com/images/e71e45362fccc0b9a2ccce97bff93780/tenor.gif?itemid=11115628" , "https://media1.tenor.com/images/70960e87fb9454df6a1d15c96c9ad955/tenor.gif?itemid=10092582", "https://media1.tenor.com/images/bb5608910848ba61808c8f28caf6ec7d/tenor.gif?itemid=11039783"]

function hugs() {
	return hug[Math.floor(Math.random() * hug.length)];
};
function kisses() {
	return kiss[Math.floor(Math.random() * kiss.length)];
};
function pats() {
	return pat[Math.floor(Math.random() * pat.length)];
};
const rockpaperscissors = ["Rock", "Paper", "Scissors"]

const fortniteChallengesWeapons = ["Pistols only", "Shotguns only", "Sniper Rifles only", "Pistols/Snipers only", "Uncommon (Green) weapons only", "Common (Gray) weapons only", "Burst weapons only", "SMG only", "No Epic/Legendary weapons", "Snipers and Shotguns only", "Only one weapon", "No Rocket/Grenade launchers", "No Legendary weapons" ]
const fortniteChallengesBuilding = ["Only use stone to build", "Only use wood to build", "Only use metal to build", "No building allowed", "You can only build stairs"]
const fortniteChallengesDropzone = ["Tomato Temple", "Tilted Towers", "Wailing Woods", "Fatal Fields", "Motel", "Retail Row", "Lazy Links", "Risky Reels", "Greasy Grove", "Dusty Divot", "Snobby Shores", "Paradise Palms", "Flush Factory", "Haunted Hills", "Shifty Shafts", "Salty Springs", "Lucky Landing", "Loot Lake"]
const fortniteChallengesMedicals = ["Only bandages", "Only bandages and small shield potions", "Shield potions only", "No med kits", "No bandages", "No shield potions"]

function randomWeapons() {
	return fortniteChallengesWeapons[Math.floor(Math.random() * fortniteChallengesWeapons.length)];
};
function randomBuilding() {
	return fortniteChallengesBuilding[Math.floor(Math.random() * fortniteChallengesBuilding.length)];
};
function randomMedicals() {
	return fortniteChallengesMedicals[Math.floor(Math.random() * fortniteChallengesMedicals.length)];
};
function randomDropzone() {
	return fortniteChallengesDropzone[Math.floor(Math.random() * fortniteChallengesDropzone.length)];
};

function rps() {
	return rockpaperscissors[Math.floor(Math.random() * rockpaperscissors.length)];
};
function roll() {
	return Math.floor(Math.random() * 100);
};
function dice() {
	return Math.floor(Math.random() * 6) + 1;
};
function coinflip() {
	return Math.floor(Math.random() * 2) + 1;
};

const commands = {
	
	'help': (msg) => {
		const embed = {
			"title": "Help",
			"color": (blue),
		"fields": [
			{
				name: "__General__",
				value: `**${prefix}stats** : "Shows your stats" \n **${prefix}info** : "Shows information about this bot" \n **${prefix}serverinfo** : "Shows information about this server" \n **${prefix}remindme <time> <message>** : "More info with **${prefix}remindme**"\n **${prefix}remind <time> <message>** : "More info with **${prefix}remind**"\n **${prefix}avatar** : "Shows your avatar"\n **${prefix}shop** : "Shows shop"\n **${prefix}money** : "Shows your money"`,
			},
			{
				name: "__Games__",
				value: `**${prefix}tictactoe** : "Play Tic-Tac-Toe" \n **${prefix}hangman** : "Play Hangman" \n **${prefix}coinflip** : "Play coinflip" \n **${prefix}dice** : "Rolls a dice" \n **${prefix}roll**" : "Sends random number between 0-100" \n **${prefix}rps** : "Play Rock-Paper-Scissors"`,
			},
			{
				name: "__Fun__",
				value: `**${prefix}challenge** : "Sends random Fortnite Challenge" \n **${prefix}hug** : "Sends hug gif" \n **${prefix}kiss** : "Sends kiss gif" \n **${prefix}pat** : "Sends pat gif" \n **${prefix}daily** : "Get $100 every day" \n **${prefix}buy <item>** : "Buy things with money"`,
			},
			{
				name: "__Moderation__",
				value: `**${prefix}kick** : "Kicks the member you tag" \n **${prefix}softban** : "Softbans the member you tag" \n **${prefix}ban** : "Bans the member you tag" \n **${prefix}clean** : "Cleans the chat"`,
			},
			],
				footer: {
				text: "More commands with !commands",
			  }
			
			};
			msg.channel.send({embed})
	},
	'commands': (msg) => {
		const embed = {
			"title": "Commands",
			"color": (blue),
		"fields": [
			{
				name: "General -- 8",
				value: `\`${prefix}stats\` \`${prefix}info\` \`${prefix}serverinfo\` \`${prefix}remindme\` \`${prefix}remind\` \`${prefix}avatar\` \`${prefix}shop\` \`${prefix}money\``,
			},
			{
				name: "Games -- 6",
				value: `\`${prefix}tictactoe\` \`${prefix}hangman\` \`${prefix}coinflip\` \`${prefix}dice\` \`${prefix}roll\` \`${prefix}rps\``,
			},
			{
				name: "Fun -- 8",
				value: `\`${prefix}challenge\` \`${prefix}hug\` \`${prefix}kiss\` \`${prefix}pat\` \`${prefix}kawaii\` \`${prefix}loli\` \`${prefix}daily\` \`${prefix}buy\``,
			},
			{
				name: "Moderation -- 4",
				value: `\`${prefix}kick\` \`${prefix}softban\` \`${prefix}ban\` \`${prefix}clean\``,
			},
			],
				footer: {
				text: `For more information use ${prefix}help`,
			  }
			
			};
			msg.channel.send({embed})
		},

	'info': (msg) => {
		let botembed = new Discord.RichEmbed()
			.setTitle("KemZ Information")
			.setColor(blue)
			.setThumbnail(client.user.avatarURL)
			.setDescription(`Version: **${version} **\nCreated on: **31.8 2018** \nCreated by: **Jeme#6402**`)
		
		msg.channel.send(botembed);
	},
	'reboot': (msg) => {
		if (msg.author.id == authorID) process.exit();
	},
    'loli' : (msg) => {
		var embed = new Discord.RichEmbed()
		.setImage("https://media1.tenor.com/images/8099a2d3e3f820ddcf96072fc33ad332/tenor.gif?itemid=8231871")
		.setColor(blue)
		msg.channel.send(embed);
	},
	'kawaii' : (msg) => {
		var embed = new Discord.RichEmbed()
		.setImage("https://media1.tenor.com/images/c5fcb7647a657ea4cff00c1585bab4bb/tenor.gif?itemid=9484577")
		.setColor(blue)
		msg.channel.send(embed);
	},	
    'jeme' : (msg) => {
	(msg.channel.send("Jeme is trying to fix it..."));
	},
    'serverinfo' : (msg) => {
		let serverembed = new Discord.RichEmbed()
		.setTitle("Server Information")
		.setColor(blue)
		.addField("Server Name", msg.guild.name)
		.addField("Server owner", msg.guild.owner)
		.addField("Created on", msg.guild.createdAt)
		.addField("You joined", msg.guild.joinedAt)
		.addField("Total members", msg.guild.memberCount)

		msg.channel.send(serverembed)
    },
    'shop' : (msg) => {
	let serverembed = new Discord.RichEmbed()
	.setTitle("Shop")
	.setColor(blue)
	.setDescription("Buy something with \`!buy <item>\`")
	.addField("Cookie", "$500", true)
	.addField("Apple", "$700", true)
	.addField("Pizza", "$1000", true)
	.addField("Nothing", "$5000", true)
	.addField("Cat", "$10000", true)
	.addField("KemZ", "$100000", true)
	msg.channel.send(serverembed)
	},
    'hello' : (msg) => {
	(msg.channel.send("Hello "+ msg.member.user));
	},
    'uwu' : (msg) => {
	(msg.channel.send("owo"));
	},
    'owo' : (msg) => {
	(msg.channel.send("uwu"));
	},
    'fix' : (msg) => {
	(msg.channel.send("It's not broken, It's a feature."));
	},
	'kemz' : (msg) => {
	(msg.channel.send("Jeme sucks at coding. LOL"));
	},
	'rps' : (msg) => {
	let tosend = ['```xl',`choose either "${prefix}rock", "${prefix}paper", "${prefix}scissors"`,	'```'];
	msg.channel.send(tosend.join('\n'));
	},
	'noob' : (msg) => {
	(msg.channel.send("Please stop"));
	},
	'rock' : (msg) => {
	(msg.channel.send(rps()));
	},
	'paper' : (msg) => {
	(msg.channel.send(rps()));
	},
	'scissors' : (msg) => {
	(msg.channel.send(rps()));
	},
	'roll' : (msg) => {
	(msg.channel.send({embed: {
		color: (blue),
		description: "You rolled: **" + roll() + "**",
	author: {
			name: `${msg.author.username}#${msg.author.discriminator}`,
			icon_url: msg.author.avatarURL,
			}
		}}))
	},
	'coinflip' : (msg) => {
			let coin = coinflip()
			if(coin == 1){
				money.updateBal(msg.author.id, 10).then(() => {
		(msg.channel.send({embed: {
			color: (green),
			description: `You won!`,
		author: {
				name: `${msg.author.username}#${msg.author.discriminator}`,
				icon_url: msg.author.avatarURL,
				}
			}})
		)}
	)}else{
		(msg.channel.send({embed: {
			color: (red),
			description: "You lost!",
		author: {
				name: `${msg.author.username}#${msg.author.discriminator}`,
				icon_url: msg.author.avatarURL,
				}}
			}))
		}
	},
	'dice' : (msg) => {
	(msg.channel.send({embed: {
		color: (blue),
		description: "You got **" + dice() + "**",
	author: {
			name: `${msg.author.username}#${msg.author.discriminator}`,
			icon_url: msg.author.avatarURL,
			}
		}}))
	},
	'lenny' : (msg) => {
	(msg.channel.send("( ͡° ͜ʖ ͡°)"));
	},
	'money' : (msg) => {
		money.fetchBal(msg.author.id).then((i) => {
		(msg.channel.send({embed: {
			color: (blue),
			description: `Money:** $${i.money}**`,
		author: {
				name: `${msg.author.username}#${msg.author.discriminator}`,
				icon_url: msg.author.avatarURL,
				}
			}}))
		})
	},
	'coins' : (msg) => {
		money.fetchBal(msg.author.id).then((i) => {
		(msg.channel.send({embed: {
			color: (blue),
			description: `Money:** $${i.money}**`,
		author: {
				name: `${msg.author.username}#${msg.author.discriminator}`,
				icon_url: msg.author.avatarURL,
				}
			}}))
		})
	},

};



client.on("message", (message) => {
	if (message.author.bot) return;
	if (message.channel.type == "dm") return;
	money.updateBal(message.author.id, 1);
	
	sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
				message.reply(`You have leveled up to level **${curLevel}**`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
		}
	}).catch(() => {
		console.error;
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
		});
	});


	if (!message.content.startsWith(prefix)) return;

	if (message.content.toUpperCase() === `${prefix}BUY`) {	
		message.reply(`\`${prefix}buy <item>\` \n **Example:** ${prefix}buy cat`)
	}

	if (message.content.toUpperCase() === `${prefix}BUY COOKIE` || (message.content.toUpperCase() === (`${prefix}BUY <COOKIE>`))){
		money.fetchBal(message.author.id).then((i) => {
			if (i.money >= 500) {
				money.updateBal(message.author.id, -500).then(() => {
				(message.channel.send("Sorry, I am out of cookies at the moment but I can take your money!"));
				})
			}else{
				(message.channel.send("You don't have enough money!"));
			}
		})
	}
	if (message.content.toUpperCase() === `${prefix}BUY APPLE` || (message.content.toUpperCase() === (`${prefix}BUY <APPLE>`))){
		money.fetchBal(message.author.id).then((i) => {
			if (i.money >= 700) {
				money.updateBal(message.author.id, -700).then(() => {
				(message.channel.send("You bought an apple but unfortunately I'm going to eat it!"));
				})
			}else{
				(message.channel.send("You don't have enough money!"));
			}
		})
	}
	if (message.content.toUpperCase() === `${prefix}BUY PIZZA` || (message.content.toUpperCase() === (`${prefix}BUY <PIZZA>`))){
		money.fetchBal(message.author.id).then((i) => {
			if (i.money >= 1000) {
				money.updateBal(message.author.id, -1000).then(() => {
				(message.channel.send("No pizza for you!"));
				})
			}else{
				(message.channel.send("You don't have enough money!"));
			}
		})
	}
	if (message.content.toUpperCase() === `${prefix}BUY NOTHING` || (message.content.toUpperCase() === (`${prefix}BUY <NOTHING>`))){
		money.fetchBal(message.author.id).then((i) => {
			if (i.money >= 5000) {
				money.updateBal(message.author.id, -5000).then(() => {
				(message.channel.send('You bought nothing'));
				})
			}else{
				(message.channel.send("You don't have enough money!"));
			}
		})
	}
	if (message.content.toUpperCase() === `${prefix}BUY CAT` || (message.content.toUpperCase() === (`${prefix}BUY <CAT>`))){
		money.fetchBal(message.author.id).then((i) => {
			if (i.money >= 10000) {
				money.updateBal(message.author.id, -10000).then(() => {
				(message.channel.send("Sorry but your cat died.."));
				})
			}else{
				(message.channel.send("You don't have enough money"));
			}
		})
	}
	if (message.content.toUpperCase() === `${prefix}BUY KEMZ` || (message.content.toUpperCase() === (`${prefix}BUY <KEMZ>`))){
		money.fetchBal(message.author.id).then((i) => {
			if (i.money >= 100000) {
				money.updateBal(message.author.id, -100000).then(() => {
				(message.channel.send("You can't buy me, but I can take your money!"));
				})
			}else{
				(message.channel.send("You don't have enough money"));
			}
		})
	}

	if (message.content.toUpperCase() === `${prefix}CLEAN`) {
		message.channel.fetchMessages({ limit: 100 })
		.then(messages => {
			let msgs = messages.filter(msg => symbols.test(msg.content.substring(0, 2)) || msg.author.bot && msg.pinned == false && msg.id != message.id)	
			message.channel.bulkDelete(msgs.first(100), true)
			}).catch(err => console.log(err.stack))
		}
	
	if (message.content.toUpperCase() === `${prefix}STATS`) {
		sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
			if (!row) return message.channel.send({embed: {
				color: (blue),
				description: `${arrowRight} Your current level is **0** \n${arrowRight} You have sent **${row.points}** messages`,
				author: {
					name: `${message.author.username}#${message.author.discriminator}`,
					icon_url: message.author.avatarURL
				}
			}
		})
			message.channel.send({embed: {
				color: (blue),
				description: `${arrowRight} Your current level is **${row.level}** \n${arrowRight} You have sent **${row.points}** messages`,
				author: {
					name: `${message.author.username}#${message.author.discriminator}`,
					icon_url: message.author.avatarURL,
				}
			}})
		})
	}

	if (message.content.toUpperCase() === `${prefix}PAY`) {
		if(message.author.id != authorID){
			message.reply("You don't have the permission");
			return;
		}
			money.updateBal(message.author.id, 10000).then((i) => {
			message.channel.send(({embed: {
				color: (blue),
				description: `You got **$10000**\nNew Balance: **$${i.money}**`,
				author: {
					name: `${message.author.username}#${message.author.discriminator}`,
					icon_url: message.author.avatarURL,
				}
			}}))
		})
	}
	if (message.content.toUpperCase() === `${prefix}PAY 1M`) {
		if(message.author.id != authorID){
			message.reply("You don't have the permission");
			return;
		}
			money.updateBal(message.author.id, 1000000).then((i) => {
			message.channel.send(({embed: {
				color: (blue),
				description: `You got **$1000000**\nNew Balance: **$${i.money}**`,
				author: {
					name: `${message.author.username}#${message.author.discriminator}`,
					icon_url: message.author.avatarURL,
				}
			}}))
		})
	}


	if (message.content.toUpperCase() === `${prefix}PAYFINE`) {
		if(message.author.id != authorID){
			message.reply("You don't have the permission");
			return;
		}
		money.updateBal(message.author.id, -1000).then((i) => {
			message.channel.send(({embed: {
				color: (blue),
				description: `You lost **$1000**\nNew Balance: **$${i.money}**`,
				author: {
					name: `${message.author.username}#${message.author.discriminator}`,
					icon_url: message.author.avatarURL 
				}
			}}))
		})
	}



	if (message.content.toUpperCase() === `${prefix}DAILY`) {
			if (money[message.author.username + message.guild.name] != moment().format('L')) {
				money[message.author.username + message.guild.name] = moment().format('L')
				money.updateBal(message.author.id, 250).then(() => {
					message.channel.send({embed: {
						color: (blue),
						description: 'Recieved your **$250** daily',
						author: {
							name: `${message.author.username}#${message.author.discriminator}`,
							icon_url: message.author.avatarURL 
						}
					}});
				})
			} else {
				message.channel.send({embed: {
					color: (blue),
					description: 'You already recieved your daily. Check later **' + moment().endOf('day').fromNow() + '**.',
					author: {
						name: `${message.author.username}#${message.author.discriminator}`,
						icon_url: message.author.avatarURL 
					}
				}});
			}
		}


if (message.content.startsWith(`${prefix}ban`)) {
	if (!message.channel.permissionsFor(message.author).hasPermission("BAN_MEMBERS")) {
message.reply("You don't have the permission");
return;
	}else{
const user = message.mentions.users.first();
if (user) {
	const member = message.guild.member(user);
	if (member) {
	member.ban("Ban").then(() => {
		message.channel.send(`${user} has been banned`);
	}).catch(err => {
		console.error(err);
	})
}}}}


if (message.content.startsWith(`${prefix}softban`)) {
	if (!message.channel.permissionsFor(message.author).hasPermission("BAN_MEMBERS")) {
message.reply("You don't have the permission");
return;
	}else{
const user = message.mentions.users.first();
if (user) {
	const member = message.guild.member(user);
	if (member) {
	member.kick("Softban").then(() => {
		message.channel.send(`${user} has been softbanned`);
		let GuildMember = message.mentions.members.first();
    function deleteMessages(GuildMember) {
        message.guild.channels.forEach(c => {
            if (c.type == "text") {
                c.fetchMessages().then(messages => {
                    let toDelete = messages.filter(msg => msg.author.id == GuildMember.id);
                    try {
                       c.bulkDelete(toDelete); 
                    } catch (e) {
                        return;
                    }
                });
            } else {
                return;
            }
        });
    }
    deleteMessages(GuildMember);
	}).catch(err => {
		console.error(err);
	})
}}}}


	
	if (message.content.startsWith(`${prefix}kick`)) {
			if (!message.channel.permissionsFor(message.author).hasPermission("KICK_MEMBERS")) {
		message.reply("You don't have the permission");
		return;
			}else{
		const user = message.mentions.users.first();
		if (user) {
		  const member = message.guild.member(user);
		  if (member) {
			member.kick("Kick").then(() => {
			  message.channel.send(`${user} has been kicked`);
			}).catch(err => {
			  console.error(err);
			})
}}}}
	if (message.content.toUpperCase() === `${prefix}HUG`) {
		var embed = new Discord.RichEmbed()
		.setTitle('KemZ gave ' + message.author.username + ' a hug!')
		.setImage(hugs())
		.setColor(blue)
		message.channel.send(embed);
	};
	if (message.content.toUpperCase() === `${prefix}KISS`) {
		var embed = new Discord.RichEmbed()
		.setTitle('KemZ gave ' + message.author.username + ' a kiss!')
		.setImage(kisses())
		.setColor(blue)
		message.channel.send(embed);
	};
	if (message.content.toUpperCase() === `${prefix}PAT`) {
		var embed = new Discord.RichEmbed()
		.setTitle('KemZ gave ' + message.author.username + ' a pat!')
		.setImage(pats())
		.setColor(blue)
		message.channel.send(embed);
	};
	if (message.content.toUpperCase() === `${prefix}AVATAR`) {
		var embed = new Discord.RichEmbed()
		.setTitle(message.author.username + "#"+ message.author.discriminator)
		.setImage(message.author.avatarURL )
		.setColor(blue)
		message.channel.send(embed);
	}

	if (message.content.toUpperCase() === `${prefix}COUNT`) {
	message.channel.send(`This server has ${message.guild.memberCount} members.`);

}

	if (message.content.toUpperCase() === `${prefix}CHALLENGE`) {
		(message.channel.send({embed: {
			color: (blue),
			description: (arrowRight + randomWeapons()+ "\n" + arrowRight  + randomBuilding()+ "\n"+
			arrowRight +"Land at "+ randomDropzone()+ "\n" + arrowRight + randomMedicals()),
		author: {
				name: `${message.author.username}#${message.author.discriminator}`,
				icon_url: message.author.avatarURL,
				}
			}})
		)}
	});
				

client.on('message', msg => {
	if (msg.channel.type == "dm") return;
	if (msg.author.bot) return;
	if (!msg.content.startsWith(prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(prefix.length).split(' ')[0]](msg);
});


client.login("NDg1MDk1MTg3MDQzOTc1MTgz.DmrnUg.apeigamAy1yD5fcICy7NBqMjUI8");
