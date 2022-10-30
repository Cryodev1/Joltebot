const Database = require("@replit/database")
const db = new Database()
module.exports.run = (client, message, args) => {
  if(message.author.id !== "353353241557204994") {
    message.channel.send("No")
  } else {
    db.delete(args[0])
    message.channel.send("Unlinked " + args[0])
  }
}