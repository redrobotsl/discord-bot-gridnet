var https = require('follow-redirects').https;
var fs = require('fs');
var config = require("../config.js");
var network = "1878";
var options = {
  'method': 'POST',
  'hostname': 'gridnet.nexus-sl.net',
  'path': '/api/index.php',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  'maxRedirects': 20
};
var qs = require('querystring');
exports.run = async (client, message, [channel, content], level) => { // eslint-disable-line no-unused-vars



/////
////
/////
////







// HTTP REQUEST START

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log("END " + body);
//msg.edit(body.toString());
var actualdamninfo = body;


//message.channel.send(exampleEmbed);

  });

  res.on("error", function (error) {
    console.error("M" +  error);
  });
});
/// Make it happen then go back to end
console.log(channel);
console.log(message);
if(channel == "jcso"){
twit  = {
  action: "transmit_message",
  transmit_level: "channel",
  network_id: network,
  channel_id: "6546",
 zone_id: "2585",
  callsign: message.settings.callsign,
  use_discord: "TRUE",
  message: content
}
}   
      
else if(channel == "mpd"){
twit  = {
  action: "transmit_message",
  transmit_level: "channel",
  network_id: network,
  channel_id: "6547",
  zone_id: "2585",
  callsign: message.settings.callsign,
  use_discord: "TRUE",
  message: content
}

}
else if(channel == "jcfr"){
twit  = {
  action: "transmit_message",
  transmit_level: "channel",
  network_id: network,
  channel_id: "6550",
  zone_id: "2586",
  callsign: message.settings.callsign,
  use_discord: "TRUE",
  message: content
}
}
else if(channel == "msmc"){
twit  = {
  action: "transmit_message",
  transmit_level: "channel",
  network_id: network,
  channel_id: "6551",
  zone_id: "2586",
  callsign: message.settings.callsign,
  use_discord: "TRUE",
  message: content
}

}
else if(channel == "county"){
twit  = {
  action: "transmit_message",
  transmit_level: "global",
  network_id: network,
  callsign: message.settings.callsign,
  use_discord: "TRUE",
  message: content
}
}

//console.log("TWIT" + twit.toString());

let buff = new Buffer( JSON.stringify(twit));
const base64data = buff.toString('base64');
var fuc =  message.settings.gridnetapi + base64data;
const crypto = require('crypto');
var hash = crypto.createHash('sha1').update(fuc).digest('hex');
//console.log("BASE: " + base64data);

//console.log("Base64 " + base64data);
var postData = qs.stringify({
  'hash': hash,
  'api_key': message.settings.gridnetapi,
  'data': base64data
});
//console.log(postData);
req.write(postData);

req.end();






////
//
///
/////






















 

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "transmit",
  category: "Gridnet",
  description: "The Essential Command. Used to transmit into the network of SL. Kinda cringe my guy. ",
  usage: "transmit"
};
