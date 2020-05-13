const config = require('./config.json');
const logger = require('./logger');
const fs = require('fs')

function guildMemberAdd(member){
  logger.info(`Welcoming user ${member} to the guild`);
  const channel = member.guild.channels.cache.find(ch => ch.name === config.welcomeChannel);
  if(!channel) return;
  channel.send(`Welcome to the Frostwolves' Den, ${member}! I've sent you a DM with more info.`);
  fs.readFile('./templates/welcome.txt', 'utf8', function(err, data){
    if(err){
      logger.error('Could not read welcome text file')
    }
    member.send(data)
  })
}

module.exports.guildMemberAdd = guildMemberAdd;
