"use strict";

{
  // 1. Write a JavaScript program to display numbers as worlds using ASCII code.
  let array = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
  // console.log(String.fromCharCode(53)); // 5
  console.log("task 1");
  let word = "";

  for (let index = 0; index < array.length; index++) {
    // array[index] = String.fromCharCode(array[index]);
    let letter = String.fromCharCode(array[index]);
    word += letter;
  }

  // console.log(array);
  console.log(word);
}

{
  // 2. Write a JavaScript program to convert a string to an array of ASCII codes.
  console.log("task 2");
  // example: hello world
  // output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
  // example: Salam Azerbaycan
  // example: javascript is bomba
  let string = "Salam Azerbaycan";

  let ASCII = "";

  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    let character = string[index].charCodeAt();

    ASCII += character + ",";
  }

  console.log(ASCII.split(","));
}

{
  // 3. Write a JavaScript program to convert a string to an array of characters.
  // example: hello world
  // output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
  console.log("task 3");
  let string = "hello world";

  let array = string.split("");

  console.log(array);
}

{
  // 4. Write a JavaScript program to drop the vowels from a string.
  // example: hello world
  // output: hll wrld

  let string = "hello world";

  let vowels = ["a", "e", "i", "o", "u"];

  let newString = "";

  // for (let index = 0; index < string.length; index++) {
  //   const element = string[index];

  //   // if (!vowels.includes(element)) {
  //     // if(element != "a" && element != "e" && element != "i" && element != "o" && element != "u"){
  //     newString += element;
  //   }
  // }

  // console.log(newString);
}

{
  // 4. Write a JavaScript program to drop the vowels from a string.
  console.log("task 4");
  // example: hello world
  // output: hll wrld

  let string = "hello world";

  let vowels = ["a", "e", "i", "o", "u"];

  let newString = "";

  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    for (let index2 = 0; index2 < vowels.length; index2++) {
      const vowel = vowels[index2];

      if (element != vowel) {
        newString += element;
      }
    }
  }

  console.log(newString);
}

{
  // 5. Write a JavaScript program to check if a string contains only digits.
  console.log("task 5");
  // example: 1234567890  // true
  // example: 1234567890a // false
  let testString = "1234567890abc";

  let systemState = true;

  for (let index = 0; index < testString.length; index++) {
    const element = testString[index];

    if (typeof element != "number") {
      systemState = false;
      break;
    }
  }

  console.log(`there is only numbers in array: ${systemState}`);
}

{
  // 6. Write a JavaScript program to check if a string contains only digits and letters.
  console.log("task 6");
  // example: 1234567890  // true
  // example: 1234567890a // true
  // example: 1234567890a!@#$%^&*()_+ // false
  let extraSymbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "_", "+"];

  // define a set of requests to check:
  let setOfRequests = ["1234567890", "1234567890a", "1234567890a!@#$%^&*()_+"];

  let systemState = [];

  for (let index = 0; index < setOfRequests.length; index++) {
    const elementInSetOfRequests = setOfRequests[index];

    for (let index2 = 0; index2 < elementInSetOfRequests.length; index2++) {
      const element = elementInSetOfRequests[index2];

      if (extraSymbols.includes(element)) {
        systemState.push("catch" + index);
        break;
      }
    }
    if (systemState.length === 0) {
      console.log(`no extra symbols in request ${index}`);
    } else {
      console.log(`there are extra symbols in ${systemState}`);
      systemState = [];
    }
  }
}

{
  // 7. Write a JavaScript program to check if a string contains only uppercase letters.
  console.log("task 7");
  // example: HELLO WORLD // true
  // example: HELLO WORLD! // true
  // example: HELLO WORLD!@#$%^&*()_+ // true
  // example: HELLO WORLD!@#$%^&*()_+a // false

  // the best approach: change element to ascii, and check if ascii value, and if value gives little letter, throw alert

  // range of letters for small: to look up: 97a, 122z

  let setOfRequests = [
    "HELLO WORLD",
    "HELLO WORLD!",
    "HELLO WORLD!@#$%^&*()_+",
    "HELLO WORLD!@#$%^&*()_+a",
  ];

  let systemState = [];

  for (let index = 0; index < setOfRequests.length; index++) {
    const elementInSetOfRequests = setOfRequests[index];
    let isUppercase = true;

    for (let index = 0; index < elementInSetOfRequests.length; index++) {
      const element = elementInSetOfRequests[index];
      const asciiValue = element.charCodeAt(0);

      if (asciiValue >= 97 && asciiValue <= 122) {
        isUppercase = false;
        break;
      }
    }

    if (isUppercase) {
      console.log(`request ${index} contains only uppercase letters`);
    } else {
      console.log(`request ${index} contains lowercase letters`);
    }
  }
}
{
  // 8. Write a JavaScript program to UpperCase the first letter of each word of a given string without spaces.
  console.log("task 8");
  // example: hello world
  // output: HelloWorld
  // example: a man who thinks about the end, can not be a hero
  let string = "a man who thinks about the end, can not be a hero";
  let words = string.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word.charAt(0);
    const asciiValue = firstLetter.charCodeAt(0);

    if (asciiValue >= 97 && asciiValue <= 122) {
      firstLetter = String.fromCharCode(asciiValue - 32);
    }

    let restOfWord = word.slice(1);
    result += firstLetter + restOfWord;
  }

  console.log(result);
}

{
  // will shorten repeated objects
  let setOfRequests = [
    "hello world",
    "javascript is bomba",
    "a man who thinks about the end, can not be a hero",
  ];

  {
    // 9. Write a JavaScript program to remove duplicate characters from a string.
    console.log("task 9");
    // example: hello world
    // output: helo wrd
    // example: javascript is bomba
    // example: a man who thinks about the end, can not be a hero
    let uniqueChars = [];

    for (let index = 0; index < setOfRequests.length; index++) {
      let currentRequest = setOfRequests[index];
      let uniqueRequest = [];

      for (let index = 0; index < currentRequest.length; index++) {
        let currentChar = currentRequest[index];
        if (!uniqueRequest.includes(currentChar)) {
          uniqueRequest.push(currentChar);
        }
      }
      uniqueChars.push(uniqueRequest.join(""));
    }
    console.log(uniqueChars);
  }

  {
    // 10. Write a JavaScript program to convert a string into camel case.
    console.log("task 10");
    // example: hello world
    // output: helloWorld
    // example: javascript is bomba
    // example: a man who thinks about the end, can not be a hero

    let result = "";

    for (let index = 0; index < setOfRequests.length; index++) {
      const elementInSetOfRequests = setOfRequests[index];
      for (let index = 0; index < elementInSetOfRequests.length; index++) {
        // first letter is always small
        const element = elementInSetOfRequests[index];
        if (element === " ") {
          result += elementInSetOfRequests[index + 1].toUpperCase();
          index++;
        } else {
          result += element;
        }
      }
    }
    console.log(result);
  }

  {
    // 11. Write a JavaScript program to convert a string into snake case.
    console.log("task 11");
    // example: hello world
    // output: hello_world
    // example: a man who thinks about the end, can not be a hero

    let CurrentRequest = "a man who thinks about the end, can not be a hero";
    let result = "";
    // replace all spaces with _
    CurrentRequest = CurrentRequest.replace(/ /g, "_");
    console.log(CurrentRequest);
  }

  {
    // 12. Write a JavaScript program to convert a string into kebab case.
    console.log("task 12");
    // example: hello world
    // output: hello-world
    // example: a man who thinks about the end, can not be a hero
    // example: javascript is bomba
    // output: javascript-is-bomba

    let setOfRequests = [
      "hello world",
      "javascript is bomba",
      "a man who thinks about the end, can not be a hero",
    ];
    let resultSetOfRequests = [];

    for (let index = 0; index < setOfRequests.length; index++) {
      const elementInSetOfRequests = setOfRequests[index];
      let CurrentRequestResult = "";
      for (let index = 0; index < elementInSetOfRequests.length; index++) {
        const element = elementInSetOfRequests[index];
        if (element === " ") {
          CurrentRequestResult += "-";
        } else {
          CurrentRequestResult += element;
        }
      }
      resultSetOfRequests.push(CurrentRequestResult);
    }
    console.log(resultSetOfRequests);
  }
}

{
  // 13. Write a JavaScript program to check if a given string is a palindrome.
  console.log("task 13");
  // palindromes: madam, civic, radar, level, rotor, kayak, reviver, racecar, redder, madam, refer
  // example: hello world // false
  // example: madam // true
  // example: racecar // true
  // example: redder // true
  // example: madam // true

  let setOfRequests = ["hello world", "madam", "racecar", "redder", "madam"];

  function isPalindrome(string) {
    let reversedString = "";

    for (let index = string.length - 1; index >= 0; index--) {
      const element = string[index];
      reversedString += element;
    }

    return string === reversedString;
  }

  for (let index = 0; index < setOfRequests.length; index++) {
    const elementInSetOfRequests = setOfRequests[index];
    console.log(
      `${elementInSetOfRequests} isPalindrome ` +
        isPalindrome(elementInSetOfRequests)
    );
  }
}

{
  // 14. Write a JavaScript program to check if a given string is a pangram.
  console.log("task 14");
  // pangram: a sentence containing every letter in the English alphabet.
  // example: The quick brown fox jumps over the lazy dog. // true
  // example: The quick brown fox jumps over the dog. // false

  let setOfRequests = [
    "The quick brown fox jumps over the lazy dog.",
    "The quick brown fox jumps over the dog.",
  ];

  let englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function isPangram(string) {
    let result = true;

    for (let index = 0; index < englishAlphabet.length; index++) {
      const element = englishAlphabet[index];
      if (!string.includes(element)) {
        result = false;
        break;
      }
    }

    return result;
  }

  for (let index = 0; index < setOfRequests.length; index++) {
    const elementInSetOfRequests = setOfRequests[index];
    console.log(
      `${elementInSetOfRequests} isPangram ` + isPangram(elementInSetOfRequests)
    );
  }
}

{
  // 15. Write a JavaScript program to check if a given string is a anagram.
  console.log("task 15");
  // anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
  // example: cinema // iceman // true
  // example: listen // silent // true
  // example: hello // world // false
  // I will take 2 strings from the user and check if they are anagrams

  let setOfRequests = [
    ["cinema", "iceman"],
    ["listen", "silent"],
    ["hello", "world"],
  ];

  function isAnagram(string1, string2) {
    let result = true;

    if (string1.length !== string2.length) {
      result = false;
    } else {
      for (let index = 0; index < string1.length; index++) {
        const element = string1[index];
        if (!string2.includes(element)) {
          result = false;
          break;
        }
      }
    }

    return result;
  }

  for (let index = 0; index < setOfRequests.length; index++) {
    const elementInSetOfRequests = setOfRequests[index];
    console.log(
      `${elementInSetOfRequests[0]} and ${elementInSetOfRequests[1]} isAnagram ` +
        isAnagram(elementInSetOfRequests[0], elementInSetOfRequests[1])
    );
  }
}
