const Command = require("../base/Command.js");

class Union extends Command {
  constructor (client) {
    super(client, {
      name: "union",
      description: "I serve the JCSO Union",
      usage: "union",
 category: "Memes",

      aliases: ["union"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
       const rmv = await message.delete();
    //  var user = message.mentions.users.first();
     // const msg = await message.channel.send("<@" + user.id + ">");
      const msg2 = await message.channel.send("https://images-ext-1.discordapp.net/external/6EDr3yNXvLZB7hvP8TOKcmGWDZ7dNkc4Ooc7wD0D2fE/https/i.imgur.com/8Ti06yx.mp4");
  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Union;
