const { Command } = require('discord.js-commando');

module.exports = class ChazWeedCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'chazweed',
      group: 'fun',
      memberName: 'chazweed',
      patterns: [new RegExp('.*weed.*', 'ig')],
      description: 'Weed for Chaz',
      hidden: true
    });
  }

  run(message){
    if(message.author.id === '143473889744257028'){
      message.say('*Passes a joint to <@143473889744257028>*')
    }
  }
};
