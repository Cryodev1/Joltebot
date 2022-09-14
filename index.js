const token = process.env['Token']
const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log("Active")
})

app.get("/", (req, res) => {
  res.send("pog")
})

const Discord = require("discord.js")
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
  intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
})
const fs = require("fs")
const prefix = "."
client.commands = new Discord.Collection()
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
for (file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return;
    command.run(client, message, args)
  }
})

function update() {
  for (let i = 0; i < 10; i++) {
         setTimeout(function () {
            resEle.innerHTML += "i = " + i + "<br>";
         }, 2000 * i);
  }
}


client.login(token)