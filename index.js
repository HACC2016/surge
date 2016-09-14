const Server = require('./server');
const CONFIG = require('./config');
const Chalk = require('chalk');

const ENVIRONMENT = process.env.NODE_ENV || 'DEVELOPMENT';
const PORT = CONFIG[ENVIRONMENT].SERVER.PORT;

Server.listen(PORT, _ => {
  process.stdout.write(`${Chalk.bgCyan(`
${Chalk.bgRed(`    _____  _____  _____  _____  _____   ${Chalk.bgCyan(`                                                 `)}`)}
${Chalk.bgRed(`   |   __||  |  || __  ||   __||   __|  `)} ${Chalk.black.underline(`serv @ http://localhost:${PORT}     `)}
${Chalk.bgRed(`   |__   ||  |  ||    -||  |  ||   __|  ${Chalk.bgCyan(`                                                 `)}`)}
${Chalk.bgRed(`   |_____||_____||__|__||_____||_____|  `)}${Chalk.bgCyan(` hacked by |> Gina |> Sean |> Ray; 2016 HACC     `)}
${Chalk.bgRed(`                                        ${Chalk.bgCyan(`                                                 `)}`)}`)}
                                                                                                                        `);
});
