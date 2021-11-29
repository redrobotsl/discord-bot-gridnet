const Command = require("../base/Command.js");

class TYFYVS extends Command {
  constructor (client) {
    super(client, {
      name: "tyfyvs",
      description: "Thank you for your virtual service",
      usage: "tyfyvs <ping user>",
      aliases: ["tyfyvs"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
       const rmv = await message.delete();
      var user = message.mentions.users.first();
      const msg = await message.channel.send("<@" + user.id + ">" +" TYFYVS!");
      const msg2 = await message.channel.send("https://media.discordapp.net/attachments/680229538982133783/762625618763448360/one_tyfys.png?width=1160&height=492");
  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TYFYVS;
