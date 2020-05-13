const { Command } = require('discord.js-commando');
const logger = require('../../logger')
const fs = require('fs')

module.exports = class PromotionInfo extends Command {
  constructor(client) {
    super(client, {
      name: 'promotioninfo',
      group: 'general',
      memberName: 'promotioninfo',
      description: 'About Frostwolf Militia Promotions',
    });
  }

  run(message){
    fs.readFile('./templates/promotioninfo.txt', 'utf8', (err, data) =>{
      if(err){
        logger.error('could not read file')
      }
      message.author.send(data)
    })
  }
};
