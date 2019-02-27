module.exports = function check(str, bracketsConfig) {
  let givenString = str;
  const escapedBracketsPairs = bracketsConfig.map(pair => pair.join('').replace(/(\W)/g, '\\$1'));
	const bracketsRegex = new RegExp(`(${escapedBracketsPairs.join('|')})`, 'g');

	while (givenString.length) {
		givenString = givenString.replace(bracketsRegex, '');
		if (givenString.search(bracketsRegex) === -1) break;
	}

	return givenString.length === 0;
}
