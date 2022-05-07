// User interface logic

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Entry from "./entries.js";

// Utility Logic
// Remove all non-alphanumeric characters from string
function removePunctuation(string) {
  const stripped = string.replace(/[^a-z0-9 ]/gi, "");
  console.log("Punctuation removed: " + stripped);
  return stripped;
}

$(document).ready(function () {
  $("#journal-form").submit(function (event) {
    event.preventDefault();
    const journalTitle = $("#title").val();
    const journalEntry = $("#entry").val();
    const journal = new Entry(journalTitle, journalEntry);
    const entry = journal.showEntry();
    const wordsOnly = journal.numberWords();
    const entryNoPunctuation = removePunctuation(journalEntry);
    console.log("Entry with no punctuation: " + entryNoPunctuation);
    const lowercaseEntry = entryNoPunctuation.toLowerCase();
    console.log("Entry with characters lowercased: " + lowercaseEntry);

    // Display to html
    $("#showEntry").append("<p>" + entry + "</p>");
    $("#showEntry").append("<p> Entry has: " + wordsOnly + " words.</p>");
  });
});
