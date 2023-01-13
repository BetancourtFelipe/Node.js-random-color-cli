import chalk from 'chalk';
import randomColor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

const color = randomColor({
  luminosity: lum,
  hue: col,
});

function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}

if (process.argv[2] === 'ask') {
  hue = prompt('what the hue: ');
  luminosity = prompt('what luminosity (bright, light or dark): ');
}

colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);
