const { Command } = require('discord.js-commando');
const logger = require('../../logger')
const fs = require('fs')

module.exports = class JoinInfo extends Command {
  constructor(client) {
    super(client, {
      name: 'joininfo',
      group: 'general',
      memberName: 'joininfo',
      description: 'General information about FWM and associated groups.',
    });
  }

  run(message){
    fs.readFile('./templates/joininfo.txt', 'utf8', (err, data) =>{
      if(err){
        logger.error('could not read file')
      }
      message.author.send(data)
    })
  }
};
