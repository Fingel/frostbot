const { Command } = require('discord.js-commando');
const config = require('../../config.json');
const logger = require('../../logger')
const fs = require('fs')

module.exports = class JoinHammer extends Command {
  constructor(client) {
    super(client, {
      name: 'joinhammer',
      group: 'general',
      memberName: 'joinhammer',
      description: 'Join The Hammer with a secret code',
      args: [
        {
          key: 'password',
          prompt: 'The secret password',
          type: 'string'
        }
      ]
    });
  }

  run(message, {password}){
    if(message.guild){
      // can't delete messages in DMs
      message.delete()
    }
    const guild = this.client.guilds.cache.find(guild => guild.id === config.guildId)
    const role = guild.roles.cache.find(role => role.id === config.roles.hammer)
    const member = guild.members.cache.find(member => member.id === message.author.id)
    if(password === config.hammerPassword && member){
      logger.info(`Adding user ${member} to ${role}`)
      member.roles.add(role)
      fs.readFile('./templates/joinhammer.txt', 'utf8', (err, data) =>{
        if(err){
          logger.error('could not read file')
        }
        message.author.send(data)
      })
    }else{
      message.reply('Invalid password')
    }
  }
};
