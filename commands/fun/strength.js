const { Command } = require('discord.js-commando');

module.exports = class StrengthCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'strength',
      aliases: ['strength!'],
      group: 'fun',
      memberName: 'strength',
      patterns: [new RegExp('.*strength!.*', 'ig')],
      description: 'STRENGTH!',
      hidden: true
    });
  }

  run(message){
    message.react('💪')
  }
};
