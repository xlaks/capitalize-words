const prompt = require('prompt-sync')({ sigint: true });

function capitalizeEachWord(sentence) {
  return sentence && sentence
    .split(' ')
    .map(word => word && word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

while(true) {
  const sentence = prompt('Insert sentence: ')

  console.log(
    capitalizeEachWord(sentence)
  )
}
