const fetch = require('node-fetch');
let settings = { method: "Get" };
module.exports.run = (client, message, args) => {
  message.channel.send("Wahoo")
  fetch("https://ch.tetr.io/api/users/" + args[0], settings).then(res => res.json()).then((json) => {
    let rank = json.data.user.league.rank
    message.channel.send(rank);
    if (rank === "x") {
      message.member.roles.add("939931462621356042");
    }
    if (rank === "u") {
      message.member.roles.add("939931461304328253");
    }
    if (rank === "ss") {
      message.member.roles.add("939931460348026930");
    }
    if (rank === "s+") {
      message.member.roles.add("939931458871631872");
    }
    if (rank === "s") {
      message.member.roles.add("939931457760153671");
    }
    if (rank === "s-") {
      message.member.roles.add("939931456589930537");
    }
    if (rank === "a+") {
      message.member.roles.add("939931455361015838");
    }
    if (rank === "a") {
      message.member.roles.add("939931454253715606");
    }
    if (rank === "a-") {
      message.member.roles.add("939931453117051020");
    }
    if (rank === "b+") {
      message.member.roles.add("939931451988774932");
    }
    if (rank === "b") {
      message.member.roles.add("939931450361380945");
    }
    if (rank === "b-") {
      message.member.roles.add("939931449052770334");
    }
    if (rank === "c+") {
      message.member.roles.add("939931447698002011");
    }
    if (rank === "c") {
      message.member.roles.add("939931446544592906");
    }
    if (rank === "c-") {
      message.member.roles.add("939931445261119550");
    }
    if (rank === "d+") {
      message.member.roles.add("939931443906371706");
    }
    if (rank === "d") {
      message.member.roles.add("939931442509672490");
    }
    if (rank === "z") {
      message.member.roles.add("939931441385590794");
    }
  });

}