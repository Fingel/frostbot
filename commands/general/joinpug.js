const { Command } = require('discord.js-commando');
const config = require('../../config.json');

module.exports = class JoinPugCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'joinpug',
			aliases: ['pug'],
			group: 'general',
			memberName: 'joinpug',
			description: 'Join the PUG voice channel',
		});
	}

  run(message){
    const channel = this.client.channels.cache.find(ch => ch.name === config.pugChannel);
    channel.createInvite().then(invite => {
      message.say(`Join the PUG voice channel: ${invite}`)
    });
  }
};
