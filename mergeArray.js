newFunction();


function newFunction() {
    var firstArray = [1, 3, 5, 8, 0, 8, 90, 22];
    var secondArray = [2, 4, 4, 7, 0, 9, 4, 6];

    var firstArrLen = firstArray.length;
    var secondArrLen = secondArray.length;

    var len = firstArray.length > secondArray.length ? firstArray.length : secondArray.length;
    var j = 0;

    for (let i = 0; i < len; i++) {
        if (firstArrLen > secondArrLen) {
            firstArray.push(firstArray[i]);
            if (secondArray.length > i)
                firstArray.push(secondArray[i]);
        }
        else if (firstArrLen < secondArrLen) {
            if (firstArrLen > i) {
                firstArray.push(firstArray[i]);
            }
            firstArray.push(secondArray[i]);
        }
        else {
            firstArray.push(firstArray[i]);
            firstArray.push(secondArray[i]);
        }

    }



    var maxLen = firstArray.length;

    console.log(firstArray.slice(firstArrLen, firstArray.length));
}

