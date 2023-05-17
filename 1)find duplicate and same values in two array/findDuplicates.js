var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3',];

function findDuplicates(arr1, arr2) {
    var duplicates = [];

    arr1.forEach(function (element) {
        if (arr2.includes(element)) {
            duplicates.push(element);
        }
    });

    return duplicates;
}

var duplicates = findDuplicates(fullWordList, wordsToRemove);
console.log(duplicates);
