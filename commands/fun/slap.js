const { Command } = require('discord.js-commando');

module.exports = class SlapCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'slap',
      aliases: ['spank'],
      group: 'fun',
      memberName: 'slap',
      description: 'Slap a user',
      args: [
        {
          key: 'user',
          prompt: 'Which user would you like me to slap?',
          type: 'user'
        }
      ]
    });
  }

  run(message, {user}){
    return message.say(`*slaps ${user} around a bit with a wet Longjaw Mud Snapper*`)
  }
};
