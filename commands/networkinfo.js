const Command = require("../base/Command.js");
var https = require('follow-redirects').https;
var fs = require('fs');
var options = {
  'method': 'POST',
  'hostname': 'gridnet.nexus-sl.net',
  'path': '/api/index.php?=null',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  'maxRedirects': 20
};
var qs = require('querystring');
class Networkinfo extends Command {
  constructor (client) {
    super(client, {
      name: "networkinfo",
      description: "Network Statistics",
      category: "GridNet Dev",
      usage: "networkinfo",
      aliases: ["networkinfo"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
     const msg = await message.channel.send("Please Wait, Requesting Network information from Gridnet, this may take a moment.");








var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
//    console.log(body.toString());
//msg.edit(body.toString());
var actualdamninfo = JSON.parse(body);
const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("GridNet Information")
	.setAuthor('Dispatcher Dimmadome', 'https://i.imgur.com/FXYvK7sl.jpg', 'https://wiki.jacobdns.com/')
	.setDescription('This is the information for Dispatcher Dimmadomes connected GridNet network')
	.setThumbnail('https://i.imgur.com/FXYvK7sl.jpg')
	.addFields(
		{ name: 'Network ID', value: actualdamninfo.network_id },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Owner', value: actualdamninfo.network_owner, inline: true },
		{ name: 'Connected Radios', value: actualdamninfo.devices_connected, inline: true },
                { name: 'Channel Count', value: actualdamninfo.channel_count, inline: true },
               { name: 'Transmission Count', value: actualdamninfo.transmission_count, inline: true },


	)
	.setTimestamp()
	.setFooter('If your reading this ur mum gay', 'https://i.imgur.com/FXYvK7sl.jpg');



message.channel.send(exampleEmbed);

  });

  res.on("error", function (error) {
    console.error(error);
  });
});
var base64data = 'eyJhY3Rpb24iOiJnZXRfbmV0d29ya19kZXRhaWxzIiwibmV0d29ya19pZCI6IjFlZjM1NTc0YTliNmQ3YjQ4ZTdjMTI4NDMwNmRkNWZlMmUyNjM2OTEifQ=='

var fuc =  message.settings.gridnetapi + base64data;

const crypto = require('crypto');
var hash = crypto.createHash('sha1').update(fuc).digest('hex');


var postData = qs.stringify({
  'hash': hash,
  'api_key':  message.settings.gridnetapi,
  'data': base64data
});

req.write(postData);

req.end();











    } catch (e) {
      console.log(e);
    }
  }
}

module.exports =  Networkinfo;
