const Database = require("@replit/database")
const db = new Database()
module.exports.run = (client, message, args) => {
  if (message.author.id !== "353353241557204994") {
    message.channel.send("No")
    return;
  }
  if (args[0] !== "set") {
    switch (args[0]) {
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
        message.channel.send("spam 🚗 this 🚗 car 🚗 to 🚗 help 🚗 pidge 🚗 star (added)")
        break;
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
      case "1004176706485096510":
        message.channel.send("Its da cute axowotol, I linked you")
    }
  }
}