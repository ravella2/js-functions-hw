// Question 1
function maxOfTwoNumbers(numOne, numTwo) {

    if (numOne > numTwo) {
        return numOne;
    } else {
        return numTwo;
    }
}

// Question 2
function maxOfThree(numOne, numTwo, numThree) {
    if (numOne > numTwo && numOne > numThree) {
        return numOne;
    } else if (numTwo > numOne && numTwo > numThree) {
        return numTwo;
    } else if (numThree > numOne && numThree > numTwo) {
        return numThree;
    }
}

// Question 3
function isCharacterAVowel(letter) {
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ) {
        return letter;
    }
}

// Question 4
function sumArray(arr) {
    s = 0;
    for (var i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
}


// Question 4
function multiplyArray(arr) {
    p = arr[0];
    for (var i = 0; i < arr.length; i++) {
        p = p * arr[i];
    }
}


// Question 5
var numberOfArguments = function(){
    return arguments.length;
}



// Question 6

var reverseString = function(word){
    var splitWord = word.split("");
    var reverseArray = splitWord.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}

// Question 7
function findLongestWord (arr) {
    longestWord = 0;
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i].length > longestWord) {
              longestWord = arr[i].length;
     }
  } 
    return longestWord;
}


// Question 8
function filterLongWords (arr, i) {
    longWords = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > i) {
            longWords.push(arr[i]);
        }
    }
    return longWords;
}


