# dawgyCryptoBot
## Welcome
This bot was originally designed to pull live price data on the Crypto.com Discord server.

It has since been turned off and made public for other servers to use.

## Installation
In order to install the bot, you'll need `Node.js` installed on (preferably) a CentOS 7 server.

Also, you'll need to install a few dependencies for this bot to run:

	npm install discord.js
	npm install sync-request

Note: this bot is written to run **synchronously**. This means that while it will run with 10-20 users using the bot at once, it will inevitably crash and (quite literally) burn if you try to scale this bot up.

## "Provably" Accurate
Please note that this was written to give approximate data. While the data is pulled directly from Binance/Blockchain's respective APIs, this bot cannot guarantee the accuracy of the information due to potential liability issues.

