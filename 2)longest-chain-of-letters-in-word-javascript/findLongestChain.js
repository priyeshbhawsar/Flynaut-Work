const word = '00000111110101001111100001001';

function findLongestChain(word) {
    let longestChain = '';
    let currentChain = '';

    for (let i = 0; i < word.length; i++) {
        if (i === 0 || word[i] === word[i - 1]) {
            currentChain += word[i];
        } else {
            currentChain = word[i];
        }

        if (currentChain.length > longestChain.length) {
            longestChain = currentChain;
        }
    }

    return longestChain;
}

const longestChain = findLongestChain(word);
console.log(longestChain);

//After the loop, we check if the longest chain extends to the end of the word by comparing it with the currentChain once more