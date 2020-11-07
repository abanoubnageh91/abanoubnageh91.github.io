function max(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function maxOfThree(n1, n2, n3) {
    return max(max(n1, n2), n3);
}

function isVowel(char) {
    return 'AEIOU'.indexOf(char.toUpperCase()) !== -1;
}

function sum(...arr) {
    return arr.reduce((accumulator, item) => { return accumulator + item });
}

function multiply(...arr) {
    return arr.reduce(
        (accumulator, item) => { return accumulator * item }
    );
}

function reverse(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; --i) {
        reversedWord += word[i];
    }
    return reversedWord;
}

function findLongestWord(...words) {
    return words.reduce((longestWord = "", word) => { return max(longestWord.length, word.length) })
}

function filterLongWords(i, ...words) {
    let str = [];
    str = words.filter(word => word.length > i);
    return str;
}

function findShortestWord(...words) {
    return words.reduce((shortestWord, currentword) => {
        return currentword.length < shortestWord.length ? currentword : shortestWord;
    })
}

//slides map/filter/reduce

const mapExample = (...arr) => { return arr.map(elem => elem * 10) };
const filterExample = (...arr) => { return arr.filter(num => num === 3) };
const reduceExample = (...arr) => {
    return arr.reduce(
        (accumulator, elem) => { return accumulator * elem }
    )
};


function myFunctionArrayTest(expected, found) {
    console.assert(JSON.stringify(expected) === JSON.stringify(found()), "TEST FAILED.  Expected " + expected + " found " + found());
    if (JSON.stringify(expected) === JSON.stringify(found())) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}

function myFunctionTest(expected, found) {
    console.assert(expected === found(), "TEST FAILED.  Expected " + expected + " found " + found());
    if (expected === found()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}

console.log("Expected output of max(20,10) is 20 " + myFunctionTest(20, () => max(20, 10)));
console.log("Expected output of maxOfThree(5,4,44) is 44 " + myFunctionTest(44, () => maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55 " + myFunctionTest(55, () => maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55 " + myFunctionTest(4, () => maxOfThree(55, 4, 44)));

console.log("\n");
console.log("Expected output of isVowel(a) is true " + myFunctionTest(true, () => isVowel("a")));
console.log("Expected output of isVowel(k) is false " + myFunctionTest(false, () => isVowel("k")));
console.log("Expected output of isVowel(u) is true " + myFunctionTest(false, () => isVowel("u")));

console.log("\n");
console.log("Expected output of sum([1,2,3,4]) is 10 " + myFunctionTest(10, () => sum(1, 2, 3, 4)));
console.log("Expected output of sum([3,3,3,4]) is 13 " + myFunctionTest(10, () => sum(3, 3, 3, 4)));

console.log("\n");
console.log("Expected output of multiply([4,8,9,7]) is 2016 " + myFunctionTest(2016, () => multiply(4, 8, 9, 7)));
console.log("Expected output of multiply([5,2,3,1]) is 30 " + myFunctionTest(5, () => multiply(5, 2, 3, 1)));

console.log("\n");
console.log("Expected output of reverse(\"nice\") is ecin " + myFunctionTest("ecin", () => reverse("nice")));
console.log("Expected output of reverse(\"okay\") is yako " + myFunctionTest("il", () => reverse("okay")));

console.log("\n");
console.log("Expected output of findLongestWord([okay,kareem,vowel]) is 5 " + myFunctionTest(5, () => findLongestWord("okay", "kareem", "vowel")));
console.log("Expected output of findLongestWord([okay,kareem,vowel]) is 5 " + myFunctionTest(3, () => findLongestWord("okay", "kareem", "vowel")));

console.log("\n");
console.log("Expected output of filterLongWords(4,[okay,kareem,vowel]) is [kareem,vowel] " + myFunctionArrayTest(['kareem', 'vowel'], () => filterLongWords(4, 'okay', 'kareem', 'vowel')));
console.log("Expected output of filterLongWords(4,[okay,kareem,vowel]) is [kareem,vowel] " + myFunctionArrayTest(['kareem'], () => filterLongWords(4, 'okay', 'kareem', 'vowel')));

console.log("\n");
console.log("Expected output of mapExample([5,8,3,1]) is [50,80,30,10] " + myFunctionArrayTest([50, 80, 30, 10], () => mapExample(5, 8, 3, 1)));
console.log("Expected output of mapExample([5,8,3,1]) is [50,80,30] " + myFunctionArrayTest([50, 80, 30], () => mapExample(5, 8, 3, 1)));

console.log("\n");
console.log("Expected output of filterExample([5,3,8,5,3,22]) is [3,3] " + myFunctionArrayTest([3, 3], () => filterExample(5, 3, 8, 5, 3, 22)));
console.log("Expected output of filterExample([5,3,8,5,3,22]) is [3,3] " + myFunctionArrayTest([3, 5, 3], () => filterExample(5, 3, 8, 5, 3, 22)));
console.log("\n");
console.log("Expected output of filterExample([1,5,4,6]) is 120 " + myFunctionTest(120, () => reduceExample(1, 5, 4, 6)));
console.log("Expected output of reduceExample([1,5,4,6]) is 120 " + myFunctionTest(60, () => reduceExample(1, 5, 4, 6)));