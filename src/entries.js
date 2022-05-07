// Business Logic
export default function Entry(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
}

// Utility Logic
// Remove all non-alphanumeric characters from string
function removePunctuation(string) {
  const stripped = string.replace(/[^a-z0-9 ]/gi, "");
  console.log("Punctuation removed: " + stripped);
  return stripped;
}

function isVowel(character) {
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

function isConsonant(character) {
  if (
    character !== "a" &&
    character !== "e" &&
    character !== "i" &&
    character !== "o" &&
    character !== "u" &&
    character.match(/[a-z]/)
  ) {
    return true;
  } else {
    return false;
  }
}

// Counts number of vowels.
function countVowels(string) {
  // Removes punctuation
  const entryNoPunctuation = removePunctuation(string);
  // Lowercases all remaining characters
  const lowercaseEntry = entryNoPunctuation.toLowerCase();
  // Loops through modified string and tallies up vowels.
  let vowels = 0;
  for (let i = 0; i < lowercaseEntry.length; i++) {
    if (isVowel(lowercaseEntry[i]) === true) {
      vowels++;
    }
  }
  console.log("There are " + vowels + " vowels in the string.");
  return vowels;
}

// Count consonants.
function countConsonants(string) {
  // Removes punctuation
  const entryNoPunctuation = removePunctuation(string);
  // Lowercases all remaining characters
  const lowercaseEntry = entryNoPunctuation.toLowerCase();
  // Loops through modified string and tallies up consonants.
  let consonants = 0;
  for (let i = 0; i < lowercaseEntry.length; i++) {
    if (isConsonant(lowercaseEntry[i]) === true) {
      consonants++;
    }
  }
  console.log("There are " + consonants + " vowels in the string.");
  return consonants;
}

Entry.prototype.showEntry = function () {
  return "Show journal entry here!";
};

Entry.prototype.numberWords = function () {
  const separateWords = this.journalEntry.split(" ");
  return separateWords.length;
};

Entry.prototype.numberVowels = function () {
  return "Number of vowels in entry: ";
};

Entry.prototype.numberConsonants = function () {
  return "Number of consonants in entry: ";
};

Entry.prototype.getTeaser = function () {
  return "First sentence, or first 8 words of entry: ";
};
