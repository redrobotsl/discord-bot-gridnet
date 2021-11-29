const Command = require("../base/Command.js");

class Reboot extends Command {
  constructor (client) {
    super(client, {
      name: "reboot",
      description: "If running under PM2, bot will restart.",
      category: "System",
      usage: "reboot",
      permLevel: "Bot Support",
      aliases: []
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      await message.reply("Bot is shutting down. It should restart momentarily");
      await Promise.all(this.client.commands.map(cmd => this.client.unloadCommand(cmd)));
      process.exit(1);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Reboot;
