const Database = require("@replit/database")
const db = new Database()
module.exports.run = (client, message, args) => {
  if(message.author.id !== "353353241557204994" && !message.author.role.cache.has("599008357076172822")) {
    message.channel.send("No")
  } else {
    db.set("block" + args[0], "lmao")
    message.channel.send("Blocked " + args[0] + " from using link")
  }
}