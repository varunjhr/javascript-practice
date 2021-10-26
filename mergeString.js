var mergeAlternately = function (word1, word2) {
    var len = word1.length > word2.length ? word1.length : word2.length;
    var firstArrLen = word1.length;
    var secondArrLen = word2.length;
    var mergedWord = "";
    for (let i = 0; i < len; i++) {
        if (firstArrLen > secondArrLen) {
            mergedWord += word1.charAt(i);
            if (secondArrLen > i) {
                mergedWord += word2.charAt(i);
            }
        }
        else if (firstArrLen < secondArrLen) {
            if (firstArrLen > i) {
                mergedWord += word1.charAt(i);
            }
            mergedWord += word2.charAt(i);
        }
        else {
            mergedWord += word1.charAt(i);
            mergedWord += word2.charAt(i);
        }

    }
    return mergedWord;
};

console.log(mergeAlternately("abfhji", "cdyh"));