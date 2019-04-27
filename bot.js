const Discord = require("discord.js");
const req = require("sync-request");
const client = new Discord.Client();
const version = "1.0";
var prefix = ">"; // the prefix you want the bot to listen for
var allowedChannel = "REPLACE_ME_WITH_THE_CHANNEL_YOU_WANT_THIS_BOT_TO_RUN_IN"; // allowed channel ID

client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
        if (msg.content.startsWith(prefix) && msg.channel.id == allowedChannel) {
                switch (msg.content.slice(1)) {
                        case "help":
                                msg.channel.send("<@" + msg.author.id + ">, this is dawgyBot **" + version + "**. Available commands: **help** and **mcostats**.");
                                break;
                        case "mcostats":
                                console.log("Generating statistics for: " + msg.author.tag + ".");
                                const BTCUSD = JSON.parse(req("GET", "https://blockchain.info/ticker").getBody()).USD.buy;
                                const BTCMCO = JSON.parse(req("GET", "https://api.binance.com/api/v1/ticker/price?symbol=MCOBTC").getBody()).price;
                                const embed = new Discord.RichEmbed()
                                        .setAuthor(client.user.username, client.user.avatarURL)
                                        .setColor(0x00AE86)
                                        .setDescription("Information is **not guaranteed to be accurate** and is pulled from Binance/Blockchain.com.")
                                        .setFooter(new Date().toString())
                                        .setThumbnail("https://cdn.dawgy.pw/Screenshot%20%40%201556399102.png")
                                        .addField("USD/BTC", "$" + Number(BTCUSD).toFixed(3) + " USD", true)
                                        .addField("USD/MCO", "$" + Number(BTCUSD * BTCMCO).toFixed(3) + " USD", true)
                                        .addField("BTC/MCO", Number(BTCMCO).toFixed(6) + " BTC", true)
                                        .addField("BTC/CRO", "*Not available*", true);
                                msg.channel.send({embed});
                                break;
                }
        }
});

client.login("YOUR_DISCORD_TOKEN");