const Command = require("../base/Command.js");
var https = require('follow-redirects').https;
var fs = require('fs');
var config = require("../config.js");

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
class ZoneChannelList extends Command {
  constructor (client) {
    super(client, {
      name: "zonechannellist",
      description: "Zone Channel list",
      category: "GridNet Dev",
      usage: "zonechannellist",
      aliases: ["zonechannellist"]
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

message.channel.send("RES " + body);

  });

  res.on("error", function (error) {
    console.error(error);
  });
});
var sending = args.join(" ");
var twit  = {
  action: "zone_channel_list",
  zone_id: sending
}

let buff = new Buffer( JSON.stringify(twit));
const base64data = buff.toString('base64');
var fuc =  config.gridnetapi + base64data;
const crypto = require('crypto');
var hash = crypto.createHash('sha1').update(fuc).digest('hex');
//console.log("BASE: " + base64data);

//console.log("Base64 " + base64data);
var postData = qs.stringify({
  'hash': hash,
  'api_key': config.gridnetapi,
  'data': base64data
});


req.write(postData);

req.end();











    } catch (e) {
      console.log(e);
    }
  }
}

module.exports =  ZoneChannelList;
