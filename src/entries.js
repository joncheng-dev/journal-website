// Business Logic
export default function Entry(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
}

// Utility Logic
// Remove all non-alphanumeric characters from string
function removePunctuation(string) {
  const stripped = string.replace(/[^a-z0-9 ]/gi, "");
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

// Prototypes
Entry.prototype.showEntry = function () {
  return this.journalEntry;
};

Entry.prototype.numberWords = function () {
  const separateWords = this.journalEntry.split(" ");
  return separateWords.length;
};

Entry.prototype.numberVowels = function () {
  const entryNoPunctuation = removePunctuation(this.journalEntry);
  const lowercaseEntry = entryNoPunctuation.toLowerCase();
  let vowels = 0;
  for (let i = 0; i < lowercaseEntry.length; i++) {
    if (isVowel(lowercaseEntry[i]) === true) {
      vowels++;
    }
  }
  return vowels;
};

Entry.prototype.numberConsonants = function () {
  const entryNoPunctuation = removePunctuation(this.journalEntry);
  const lowercaseEntry = entryNoPunctuation.toLowerCase();
  let consonants = 0;
  for (let i = 0; i < lowercaseEntry.length; i++) {
    if (isConsonant(lowercaseEntry[i]) === true) {
      consonants++;
    }
  }
  return consonants;
};

Entry.prototype.getTeaser = function () {
  let numberOfWords = this.numberWords();
  let print = "";
  const separateWords = this.journalEntry.split(" ");
  if (numberOfWords > 8) {
    for (let i = 0; i < 8; i++) {
      print += " " + separateWords[i];
    }
  } else {
    for (let i = 0; i < separateWords.length; i++) {
      print += " " + separateWords[i];
      if (
        separateWords[i].indexOf(".") != -1 ||
        separateWords[i].indexOf("!") != -1 ||
        separateWords[i].indexOf("?") != -1
      ) {
        break;
      }
    }
  }
  return print;
};
