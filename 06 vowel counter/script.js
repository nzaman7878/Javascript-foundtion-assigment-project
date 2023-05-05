/* 6.  Vowel Counter
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate 
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be 
counted. */

function countVowels(name) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name.charAt(i))) {
      count++;
    }
  }
  return count;
}


console.log(countVowels("John Doe")); // 3
console.log(countVowels("Jane Smith")); // 3
