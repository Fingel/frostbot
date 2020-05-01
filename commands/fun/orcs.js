
const { Command } = require('discord.js-commando');

module.exports = class OrcCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'orc',
      aliases: ['orcs'],
      patterns: [new RegExp(' {1}orc[s.]?', 'ig')],
      group: 'fun',
      memberName: 'orcs',
      description: 'What FrostBot really thinkgs of orcs.',
    });
  }

  run(message){
    return message.say('Orcs really do smell bad.')
  }
};
