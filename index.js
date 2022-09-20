const token = process.env['Token']
const express = require("express")
const app = express()
const Database = require("@replit/database")
const db = new Database()
const fetch = require('node-fetch');
let settings = { method: "Get" };

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
  if (message.content.startsWith(prefix) && (message.channel.id === "891657659336523796" || (message.channel.id === "1019694224695890050" || (message.author.id === "353353241557204994") || (message.author.id === "768426796361711646") || (message.channel.id === "605943550579965952")))) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if (!command) return;
    command.run(client, message, args)
  }
  if ((message.channel.id === "927294656709029908" || (message.channel.id === "931448952002322472" || (message.channel.id === "967946590138536018" || (message.channel.id === "963933032320999424" || (message.channel.id === "933227264362045490")))))) {
    fetch("https://ch.tetr.io/api/users/" + message.content.toLowerCase(), settings).then(res => res.json()).then((json) => {
      if (!json.success) {
        console.log("Fail")
        return;
      }
      if (message.content == null) {
        console.log("Null content")
        return;
      }
      let id = json.data.user._id
      fetch("https://ch.tetr.io/api/news/user_" + id, settings).then(res => res.json()).then((json) => {
        for (let thenew of json.data.news) {
          if (thenew.type === "rankup") {
            if (thenew.data.rank === "x") {
              //u
              if (message.member.roles.cache.has("599009446672465950")) {
                message.member.roles.remove("599009446672465950");
              }
              //ss
              if (message.member.roles.cache.has("599009915960426507")) {
                message.member.roles.remove("599009915960426507");
              }
              if (!message.member.roles.cache.has("963734575379542036")) {
                message.member.roles.add("963734575379542036")
              }
              break;
            } else if (thenew.data.rank === "u") {
              //ss
              if (message.member.roles.cache.has("599009915960426507")) {
                message.member.roles.remove("599009915960426507");
              }
              if (!message.member.roles.cache.has("599009446672465950") && !message.member.roles.cache.has("963734575379542036")) {
                message.member.roles.add("599009446672465950")
              }
              break;
            }
          }
        }
      })
      let rank = json.data.user.league.rank
      if (!rank) {
        console.log("No rank")
        return;
      }
      message.react('👍')
      db.set(message.author.id, message.content.toLowerCase())
      let hooman = message.member
      //x
      if (hooman.roles.cache.has("939931462621356042") && rank !== "x") {
        hooman.roles.remove("939931462621356042");
      }
      //u
      if (hooman.roles.cache.has("939931461304328253") && rank !== "u") {
        hooman.roles.remove("939931461304328253");
      }
      //ss
      if (hooman.roles.cache.has("939931460348026930") && rank !== "ss") {
        hooman.roles.remove("939931460348026930");

      }
      //s+
      if (hooman.roles.cache.has("939931458871631872") && rank !== "s+") {
        hooman.roles.remove("939931458871631872");
      }
      //s
      if (hooman.roles.cache.has("939931457760153671") && rank !== "s") {
        hooman.roles.remove("939931457760153671");
      }
      //s-
      if (hooman.roles.cache.has("939931456589930537") && rank !== "s-") {
        hooman.roles.remove("939931456589930537");
      }
      //a+
      if (hooman.roles.cache.has("939931455361015838") && rank !== "a+") {
        hooman.roles.remove("939931455361015838");
      }
      //a
      if (hooman.roles.cache.has("939931454253715606") && rank !== "a") {
        hooman.roles.remove("939931454253715606");
      }
      //a-
      if (hooman.roles.cache.has("939931453117051020") && rank !== "a-") {
        hooman.roles.remove("939931453117051020");
      }
      //b+
      if (hooman.roles.cache.has("939931451988774932") && rank !== "b+") {
        hooman.roles.remove("939931451988774932");
      }
      //b
      if (hooman.roles.cache.has("939931450361380945") && rank !== "b") {
        hooman.roles.remove("939931450361380945");
      }
      //b-
      if (hooman.roles.cache.has("939931449052770334") && rank !== "b-") {
        hooman.roles.remove("939931449052770334");
      }
      //c+
      if (hooman.roles.cache.has("939931447698002011") && rank !== "c+") {
        hooman.roles.remove("939931447698002011");
      }
      //c
      if (hooman.roles.cache.has("939931446544592906") && rank !== "c") {
        hooman.roles.remove("939931446544592906");
      }
      //c-
      if (hooman.roles.cache.has("939931445261119550") && rank !== "c-") {
        hooman.roles.remove("939931445261119550");
      }
      //d+
      if (hooman.roles.cache.has("939931443906371706") && rank !== "d+") {
        hooman.roles.remove("939931443906371706");
      }
      //d
      if (hooman.roles.cache.has("939931442509672490") && rank !== "d") {
        hooman.roles.remove("939931442509672490");
      }
      //z
      if (hooman.roles.cache.has("939931441385590794") && rank !== "z") {
        hooman.roles.remove("939931441385590794");
      }
      if (rank === "x" && !hooman.roles.cache.has("939931462621356042")) {
        hooman.roles.add("939931462621356042");
      }
      if (rank === "u" && !hooman.roles.cache.has("939931461304328253")) {
        hooman.roles.add("939931461304328253");
      }
      if (rank === "ss" && !hooman.roles.cache.has("939931460348026930")) {
        hooman.roles.add("939931460348026930");
      }
      if (rank === "s+" && !hooman.roles.cache.has("939931458871631872")) {
        hooman.roles.add("939931458871631872");
      }
      if (rank === "s" && !hooman.roles.cache.has("939931457760153671")) {
        hooman.roles.add("939931457760153671");
      }
      if (rank === "s-" && !hooman.roles.cache.has("939931456589930537")) {
        hooman.roles.add("939931456589930537");
      }
      if (rank === "a+" && !hooman.roles.cache.has("939931455361015838")) {
        hooman.roles.add("939931455361015838");
      }
      if (rank === "a" && !hooman.roles.cache.has("939931454253715606")) {
        hooman.roles.add("939931454253715606");
      }
      if (rank === "a-" && !hooman.roles.cache.has("939931453117051020")) {
        hooman.roles.add("939931453117051020");
      }
      if (rank === "b+" && !hooman.roles.cache.has("939931451988774932")) {
        hooman.roles.add("939931451988774932");
      }
      if (rank === "b" && !hooman.roles.cache.has("939931450361380945")) {
        hooman.roles.add("939931450361380945");
      }
      if (rank === "b-" && !hooman.roles.cache.has("939931449052770334")) {
        hooman.roles.add("939931449052770334");
      }
      if (rank === "c+" && !hooman.roles.cache.has("939931447698002011")) {
        hooman.roles.add("939931447698002011");
      }
      if (rank === "c" && !hooman.roles.cache.has("939931446544592906")) {
        hooman.roles.add("939931446544592906");
      }
      if (rank === "c-" && !hooman.roles.cache.has("939931445261119550")) {
        hooman.roles.add("939931445261119550");
      }
      if (rank === "d+" && !hooman.roles.cache.has("939931443906371706")) {
        hooman.roles.add("939931443906371706");
      }
      if (rank === "d" && !hooman.roles.cache.has("939931442509672490")) {
        hooman.roles.add("939931442509672490");
      }
      if (rank === "z" && !hooman.roles.cache.has("939931441385590794")) {
        hooman.roles.add("939931441385590794");
      }
    });
  }
})

/*
db.list().then(keys => {
  for (let key of keys) {
    db.get(key).then(value => {
    if(value === "PlaidPaint") {
      db.delete(key)
    }
  })
  }
})



db.list().then(keys => {
  for (let key of keys) {
    db.get(key).then(value => {
      console.log(key)
      console.log(value)
  })
  }
})
*/



function update() {
  console.log("Updating!")
  db.list().then(keys => {

    for (let key of keys) {
      if (key.startsWith("CMESSAGE")) {
        return;
      }
      db.get(key).then(value => {

        fetch("https://ch.tetr.io/api/users/" + value, settings).then(res => res.json()).then((json) => {

          if (!json) {
            console.log("fail")
            return;
          }

          let rank = json.data.user.league.rank

          let guild = client.guilds.cache.get("599005375907495936")
          if (guild == null) {
            return;
          }
          let channel = guild.channels.cache.get("605943550579965952")






          guild.members.fetch(key).then((hooman) => {
            let id = json.data.user._id

            fetch("https://ch.tetr.io/api/news/user_" + id, settings).then(res => res.json()).then((json) => {
              for (let thenew of json.data.news) {
                if (thenew.type === "rankup") {
                  if (thenew.data.rank === "x") {
                    //u
                    if (hooman.roles.cache.has("599009446672465950")) {
                      hooman.roles.remove("599009446672465950");
                    }
                    //ss
                    if (hooman.roles.cache.has("599009915960426507")) {
                      hooman.roles.remove("599009915960426507");
                    }
                    if (!hooman.roles.cache.has("963734575379542036")) {
                      hooman.roles.add("963734575379542036")
                    }
                    break;
                  } else if (thenew.data.rank === "u") {
                    //ss
                    if (hooman.roles.cache.has("599009915960426507")) {
                      hooman.roles.remove("599009915960426507");
                    }
                    if (!hooman.roles.cache.has("599009446672465950") || !hooman.roles.cache.has("963734575379542036")) {
                      hooman.roles.add("599009446672465950")
                    }
                    break;
                  }
                }
              }
            })

            //x
            if (hooman.roles.cache.has("939931462621356042")) {
              hooman.roles.remove("939931462621356042");
            }
            //u
            if (hooman.roles.cache.has("939931461304328253")) {
              hooman.roles.remove("939931461304328253");
            }
            //ss
            if (hooman.roles.cache.has("939931460348026930")) {
              hooman.roles.remove("939931460348026930");
            }
            //s+
            if (hooman.roles.cache.has("939931458871631872")) {
              hooman.roles.remove("939931458871631872");
            }
            //s
            if (hooman.roles.cache.has("939931457760153671")) {
              hooman.roles.remove("939931457760153671");
            }
            //s-
            if (hooman.roles.cache.has("939931456589930537")) {
              hooman.roles.remove("939931456589930537");
            }
            //a+
            if (hooman.roles.cache.has("939931455361015838")) {
              hooman.roles.remove("939931455361015838");
            }
            //a
            if (hooman.roles.cache.has("939931454253715606")) {
              hooman.roles.remove("939931454253715606");
            }
            //a-
            if (hooman.roles.cache.has("939931453117051020")) {
              hooman.roles.remove("939931453117051020");
            }
            //b+
            if (hooman.roles.cache.has("939931451988774932")) {
              hooman.roles.remove("939931451988774932");
            }
            //b
            if (hooman.roles.cache.has("939931450361380945")) {
              hooman.roles.remove("939931450361380945");
            }
            //b-
            if (hooman.roles.cache.has("939931449052770334")) {
              hooman.roles.remove("939931449052770334");
            }
            //c+
            if (hooman.roles.cache.has("939931447698002011")) {
              hooman.roles.remove("939931447698002011");
            }
            //c
            if (hooman.roles.cache.has("939931446544592906")) {
              hooman.roles.remove("939931446544592906");
            }
            //c-
            if (hooman.roles.cache.has("939931445261119550")) {
              hooman.roles.remove("939931445261119550");
            }
            //d+
            if (hooman.roles.cache.has("939931443906371706")) {
              hooman.roles.remove("939931443906371706");
            }
            //d
            if (hooman.roles.cache.has("939931442509672490")) {
              hooman.roles.remove("939931442509672490");
            }
            //z
            if (hooman.roles.cache.has("939931441385590794")) {
              hooman.roles.remove("939931441385590794");
            }
            if (rank === "x") {
              hooman.roles.add("939931462621356042");
            }
            if (rank === "u") {
              hooman.roles.add("939931461304328253");
            }
            if (rank === "ss") {
              hooman.roles.add("939931460348026930");
            }
            if (rank === "s+") {
              hooman.roles.add("939931458871631872");
            }
            if (rank === "s") {
              hooman.roles.add("939931457760153671");
            }
            if (rank === "s-") {
              hooman.roles.add("939931456589930537");
            }
            if (rank === "a+") {
              hooman.roles.add("939931455361015838");
            }
            if (rank === "a") {
              hooman.roles.add("939931454253715606");
            }
            if (rank === "a-") {
              hooman.roles.add("939931453117051020");
            }
            if (rank === "b+") {
              hooman.roles.add("939931451988774932");
            }
            if (rank === "b") {
              hooman.roles.add("939931450361380945");
            }
            if (rank === "b-") {
              hooman.roles.add("939931449052770334");
            }
            if (rank === "c+") {
              hooman.roles.add("939931447698002011");
            }
            if (rank === "c") {
              hooman.roles.add("939931446544592906");
            }
            if (rank === "c-") {
              hooman.roles.add("939931445261119550");
            }
            if (rank === "d+") {
              hooman.roles.add("939931443906371706");
            }
            if (rank === "d") {
              hooman.roles.add("939931442509672490");
            }
            if (rank === "z") {
              hooman.roles.add("939931441385590794");
            }
          })
        });
      })
    }
  });
}


timer = setInterval(function() {
  update()
}, 300000);

client.on("ready", () => {
  console.log("Initialized!")
  client.user.setPresence({ activities: [{ name: 'with pain' }], status: 'dnd' });
  let guild = client.guilds.cache.get("599005375907495936")
  let channel = guild.channels.cache.get("605943550579965952")
  channel.send("Online")
})

client.login(token)