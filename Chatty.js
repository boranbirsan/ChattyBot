const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    console.log("Servers:");
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name);

        guild.channels.cache.forEach((channel) => {
			console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
		})
    });
});

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
})

const bot_secret_token = "STUPIDTOKEN";

client.login(bot_secret_token);