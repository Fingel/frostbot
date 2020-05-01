const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');
const events = require('./events')
const logger = require('./logger');

if(process.env.NODE_ENV != 'production'){
  require('dotenv').config()
}

const client = new CommandoClient({
  commandPrefix: config.commandPrefix,
  owner: config.owners
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['general', 'General commands'],
    ['fun', 'Commands for fun'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(path.resolve(), 'commands'));

client.once('ready', () => {
  logger.info(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity('Fingel\'s Keyboard');
});

client.on('error', (e) => {
  logger.error(e)
});

client.on('guildMemberAdd', member => { events.guildMemberAdd(member) })

client.login(process.env.DISCORD_AUTH)
