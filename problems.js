function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let array = [];
    for (i = 1; i < arr.length; i += 2) {
        array = array.concat(arr[i]);   
    }
    return array;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let array = [];
    let arrayReversed = [];
    for (i = 1; i < arr.length; i += 2) {
        array = array.concat(arr[i]);
    }
    for (x = array.length-1; x >= 0; x--) {
        arrayReversed = arrayReversed.concat(array[x])
    }
   return arrayReversed
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let array = [];
    for (i = 1; i < arr.length; i *= 2) {
        array = array.concat(arr[i]);
    }
    return array;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let array = [];
    for (i = 1; i < arr.length; i = i*n) {
        array = array.concat(arr[i]);
    }
    return array;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let array = [];
    for (i = 0; i < arr.length / 2; i++) {
        array = array.concat(arr[i]);
    }
    return array;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let array = [];
    for (i = arr.length / 2; i < arr.length; i++) {
        array = array.concat(arr[i]);
    }
    return array;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}