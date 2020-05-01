const { Command } = require('discord.js-commando');
const config = require('../../config.json');
const logger = require('../../logger')

module.exports = class JoinFrostwolf extends Command {
  constructor(client) {
    super(client, {
      name: 'joinfrostwolf',
      aliases: ['joinfw'],
      group: 'general',
      memberName: 'joinfrostwolf',
      description: 'Join Frostwolf Miltia with the secret code.',
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
    const role = guild.roles.cache.find(role => role.id === config.roles.member)
    const member = guild.members.cache.find(member => member.id === message.author.id)
    if(password === config.guildInvitePassword && member){
      logger.info(`Adding user ${member} to ${role}`)
      //member.roles.add(role)
      message.reply('Welcome to the militia!')
    }else{
      message.reply('Invalid password')
    }
  }
};
