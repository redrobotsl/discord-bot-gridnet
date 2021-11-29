const Command = require("../base/Command.js");

class Yping extends Command {
  constructor (client) {
    super(client, {
      name: "yping",
      description: "no at everyone",
      usage: "yping <ping user>",
 category: "Memes",

      aliases: ["yping"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
       const rmv = await message.delete();
      var user = message.mentions.users.first();
      const msg = await message.channel.send("<@" + user.id + ">");
      const msg2 = await message.channel.send("https://cdn.discordapp.com/attachments/184464140725780481/753096243256754228/video0-179.mp4");
  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Yping;
