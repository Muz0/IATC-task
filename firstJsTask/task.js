{
  // 1. Write a JavaScript program to display numbers as worlds using ASCII code.
  let array = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
  // console.log(String.fromCharCode(53)); // 5

  let word = "";

  for (let index = 0; index < array.length; index++) {
    // array[index] = String.fromCharCode(array[index]);
    let letter = String.fromCharCode(array[index]);
    word += letter;
  }

  console.log(array);
  console.log(word);
}

{
  // 2. Write a JavaScript program to convert a string to an array of ASCII codes.
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
