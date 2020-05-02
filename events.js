const config = require('./config.json');
const logger = require('./logger');

function guildMemberAdd(member){
  logger.info(`Welcoming user ${member} to the guild`);
  const channel = member.guild.channels.cache.find(ch => ch.name === config.welcomeChannel);
  if(!channel) return;
  channel.send(`Welcome to the Frostwolves' Den, ${member}! I've sent you a DM with more info.`);
  member.send(
    'Welcome to the Frostwolf Militia! Make sure to download the Group Calendar for our ' +
    'guild\'s in-game calendar. In addition we do a lot of socializing and planning for ' +
    'events on discord so make sure to check the #events and #guild-chat channels when you can. ' +
    'Strength! 💪'
  )
  member.send(
    'Are you here for a PUG? Type **!joinpug** to join the PUG voice channel.'
  )
  member.send(
    'Are you interested in learning more about joining the militia? Please DM one of the ' +
    'online officers by typing **!officers** or if none are online **!officers offline**.'
  )
}

module.exports.guildMemberAdd = guildMemberAdd;
