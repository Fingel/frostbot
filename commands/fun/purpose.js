const { Command } = require('discord.js-commando');

module.exports = class PurposeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'purpose',
      group: 'fun',
      memberName: 'purpose',
      patterns: [new RegExp('.*what is your purpose.*', 'ig')],
      description: 'What is my purpose?',
      hidden: true
    });
  }

  run(message){
    if(message.author.id === '508486008493572096'){
      message.say('My purpose is to death roll.')
    }
  }
};
