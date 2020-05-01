const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = class OfficersCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'officers',
      aliases: ['officers'],
      group: 'general',
      memberName: 'officers',
      description: 'List Guild Officers. Use `officers offline` to display offline officers as well.',
      args: [
        {
          key: 'offline',
          prompt: 'Display offline officers?',
          type: 'string',
          default: 'online',
          ofOf: ['offline', 'online']
        }
      ]
    });
  }

  run(message, {offline}){
    const guild = this.client.guilds.cache.find(guild => guild.id === config.guildId)
    const role = guild.roles.cache.find(role => role.id === config.roles.officer)
    for(let user of role.members.map(m => m.user)){
      if(user.presence.status === 'online' || offline === 'offline'){
        const statusPrefix = user.presence.status === 'online' ? '✅' : '🚫'
        let officerEmbed = new Discord.MessageEmbed()
          .setTitle(`${user.username}`)
          .setDescription(`${user}`)
          .setThumbnail(user.displayAvatarURL())
          .addField('Status', `${statusPrefix} ${user.presence.status}`)

        message.say(officerEmbed)
      }
    }
  }
};
