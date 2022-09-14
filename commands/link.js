const fetch = require('node-fetch');
let settings = { method: "Get" };
module.exports.run = (client, message, args) => {
  message.channel.send("Wahoo")
  fetch("https://ch.tetr.io/api/users/" + args[0], settings).then(res => res.json()).then((json) => {
    let rank = json.data.user.league.rank
    message.channel.send(rank);
    if (rank === "x") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "u") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "ss") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "s+") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "s") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "s-") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "a+") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "a") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "a-") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "b+") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "b") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "b-") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "c+") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "c") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "c-") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "d+") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "d") {
      //message.member.roles.add("1019334918150574150");
    }
    if (rank === "z") {
      //message.member.roles.add("1019334918150574150");
    }
  });

}