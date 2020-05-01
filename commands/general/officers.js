const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = class OfficersCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'officers',
			aliases: ['officers'],
			group: 'general',
			memberName: 'officers',
			description: 'List Guild Officers. Use `officers offline` to display offline officers as well.',
      args: [
        {
          key: 'offline',
          prompt: 'Display offline officers?',
          type: 'string',
          default: 'online',
          ofOf: ['offline', 'online']
        }
      ]
		});
	}

  run(message, {offline}){
    for(let userId of config.officers){
      let user = this.client.users.cache.find(u => u.id === userId)
      if(user.presence.status === 'online' || offline === 'offline'){

        let officerEmbed = new Discord.MessageEmbed()
          .setTitle(`${user.username}`)
          .setDescription(`${user}`)
          .setThumbnail(user.displayAvatarURL())
          .addField('Rank', 'Grunt')
          .addField('Status', user.presence.status)

        message.say(officerEmbed)
      }
    }
  }
};
