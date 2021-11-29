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
class ZoneList extends Command {
  constructor (client) {
    super(client, {
      name: "zonelist",
      description: "Zone List",
      category: "GridNet Dev",
      usage: "zonelist",
      aliases: ["zonelist"]
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
    console.log(body.toString());
message.channel.send("RES " + body.toString());

  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var twit  = {
  action: "zone_list" }

let buff = new Buffer( JSON.stringify(twit));
const base64data = "ewoiYWN0aW9uIjoiem9uZV9saXN0Igp9";
var fuc =  message.settings.gridnetapi +""+ base64data;
const crypto = require('crypto');
var hash = crypto.createHash('sha1').update(fuc).digest('hex');
console.log("APIKEY: " + message.settings.gridnetapi);
console.log("BASE: " + base64data);
console.log ("HASH: " + hash);
//console.log("Base64 " + base64data);
var postData = qs.stringify({
  'hash': hash,
  'api_key': message.settings.gridnetapi,
  'data': "ewoiYWN0aW9uIjoiem9uZV9saXN0Igp9"
});


req.write(postData);

req.end();











    } catch (e) {
      console.log(e);
    }
  }
}

module.exports =  ZoneList;
