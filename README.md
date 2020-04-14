# DiscordCryptoBot
## Welcome
This bot was originally designed to pull live price data on the Crypto.com Discord server.

It has since been turned off and made public for other servers to use.

## Installation
In order to install the bot, you'll need `Node.js` installed on (preferably) a CentOS 7 server.

Also, you'll need to install a few dependencies for this bot to run:

	npm install discord.js
	npm install sync-request

Note: this bot is written to run **synchronously** as it was designed to run on a server with rate-limiting. 

TL;DR: If you want to scale this bot up, _I have no idea how badly it will operate_ if you try to throw 10-20 requests to the bot at once. 

It is recommended that you switch to **asynchronous** requests in the bot's code -- this will prevent the bot from hanging while processing a previous request.


## "Provably" Accurate
Please note that this was written to give approximate data. While the data is pulled directly from Binance/Blockchain's respective APIs, this bot cannot guarantee the accuracy of the information due to potential liability issues.

