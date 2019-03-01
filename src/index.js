module.exports = function check(str, bracketsConfig) {
  let givenString = str;
  const escapedBracketsPairs = bracketsConfig.map(
    pair => pair.join('')
                .replace(/(\W)/g, '\\$1')
  );
  const bracketsRegex = new RegExp(`${escapedBracketsPairs.join('|')}`, 'g');

  while (givenString.length) {
    const reducedString = givenString.replace(bracketsRegex, '');
    if (reducedString.length === givenString.length) break;
    givenString = reducedString;
  }

  return givenString.length === 0;
}
