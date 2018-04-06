import math from 'mathjs';

export function outputFormat(output) {
  if (output === 'error') {
    return 'error';
  }

  if (output) {
    return math.format(Number(output), {
      precision: 6
    });
  } else {
    return '\u00A0';
  }
}