const logger = require('winston');

/* Configure logger */
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

module.exports = logger
