/*
Text: abcbcfgm
ToFind: bcfg
*/

// Brute Force

function findPattern(text, pattern) {
  try {
    const textLength = text.length;
    const patternLength = pattern.length;
    for (let i = 0; i < textLength; i++) {
        let x = i;
      for (let j =0; j< patternLength; j++) {
        if (text[x] != pattern[j])  {
          break;
        }
        else {
          if (x - i === patternLength - 1) {
            console.log('Start of Pattern is from ', i);
            return;
          }
          x ++;
        }
      }
    }
  } catch (e) {
    throw e;
  }
}

findPattern('abcbcfgm', 'bcfg')