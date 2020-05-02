const { Command } = require('discord.js-commando');

module.exports = class RollCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'general',
      memberName: 'roll',
      description: 'Roll a random number. Use !roll <number> defaults to 100.',
      args: [
        {
          key: 'number',
          prompt: 'Roll how much?',
          type: 'integer',
          validate: number => number > 0,
          default: 100
        }
      ]
    });
  }

  run(message, {number}){
    const num = Math.floor(Math.random() * (number + 1))
    const user = message.author
    return message.say(`${user} rolled ${num}`)
  }
};

