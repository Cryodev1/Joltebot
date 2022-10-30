const Database = require("@replit/database")
const db = new Database()
const fetch = require('node-fetch');
let settings = { method: "Get" };
module.exports.run = (client, message, args) => {
  if (args[0] == null) {
    message.channel.send("Add a username")
    return;
  }
  fetch("https://ch.tetr.io/api/users/" + args[0].toLowerCase(), settings).then(res => res.json()).then((json) => {
    if (!json.success) {
      message.channel.send("Invalid username")
      return;
    }
    if (args[0] == null) {
      message.channel.send("Invalid username or api is down")
      return;
    }
    let id = json.data.user._id
    if (json.data.user.league.toprank === "x") {
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
    } else if (json.data.user.league.toprank === "u") {
      //ss
      if (message.member.roles.cache.has("599009915960426507")) {
        message.member.roles.remove("599009915960426507");
      }
      if (!message.member.roles.cache.has("599009446672465950") && !message.member.roles.cache.has("963734575379542036")) {
        message.member.roles.add("599009446672465950")
      }
    }
    let rank = json.data.user.league.rank
    if (!rank) {
      message.channel.send("Invalid username or api is down")
      return;
    }
    db.set(message.author.id, args[0].toLowerCase())
    let hooman = message.member

    db.list("block").then(keys => {
      for(let key of keys) {
        if(key.substring(5) === message.member.id) {
          message.channel.send("Not allowed")
        }
      }
    });

    switch (message.member.id) {
      case "292004672313753621":
        message.channel.send("Hewwo choco, I added it")
        break;
      case "768426796361711646":
        message.channel.send("Nnai? It added")
        break;
      case "353353241557204994":
        message.channel.send("Cryowowowowowowodev")
        break;
      case "399563490127511562":
        message.channel.send("No")
        return;
      case "707386809302122529":
        message.channel.send("Can't even 4-wide (added)")
        break;
      case "827773566790402048":
        message.channel.send("Hello ai, you have successfully been aioverlinked!")
        break;
      case "331758759699546112":
        message.channel.send("The feesh is here hooray <:feeshnya:956814800946606120>")
        break;
      case "488589957066260481":
        message.channel.send("Luwumi lwinked")
        break;
      case "639322872187322399":
        message.channel.send("hewwo qt, i linked it")
        break;
      case "1004176706485096510":
        message.channel.send("Its da cute axowotol, I linked you")
        break;
      default:
        message.channel.send("Sucessfully linked to " + args[0] + "!")


    }

    /*
    db.list("CMESSAGE").then(keys => {
      let i = 1;
      let j;
      async function jfunc() {
        j = await db.list("CMESSAGE").length
        message.channel.send(j)
      }
      jfunc()
      for (let key of keys) {
        db.get(key).then(value => {
            if (message.author.id === key.substring(8)) {
              message.channel.send(value)
              messagetruefalse = true
            } else {
              i = i + 1
            }
        })
        if(i === j) {
          
        }
      }
    })
    */

    message.react('👍')
    //x
      if (hooman.roles.cache.has("939931462621356042") && (rank !== "x")) {
        hooman.roles.remove("939931462621356042");
      }
      //u
      if (hooman.roles.cache.has("939931461304328253") && (rank !== "u")) {
        hooman.roles.remove("939931461304328253");
      }
      //ss
      if (hooman.roles.cache.has("939931460348026930") && (rank !== "ss")) {
        hooman.roles.remove("939931460348026930");

      }
      //s+
      if (hooman.roles.cache.has("939931458871631872") && (rank !== "s+")) {
        hooman.roles.remove("939931458871631872");
      }
      //s
      if (hooman.roles.cache.has("939931457760153671") && (rank !== "s")) {
        hooman.roles.remove("939931457760153671");
      }
      //s-
      if (hooman.roles.cache.has("939931456589930537") && (rank !== "s-")) {
        hooman.roles.remove("939931456589930537");
      }
      //a+
      if (hooman.roles.cache.has("939931455361015838") && (rank !== "a+")) {
        hooman.roles.remove("939931455361015838");
      }
      //a
      if (hooman.roles.cache.has("939931454253715606") && (rank !== "a")) {
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