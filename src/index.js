// Imports
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Entry from "./entries.js";

// User interface logic
$("#journal-form").submit(function (event) {
  event.preventDefault();
  let journalTitle = $("#title").val();
  let journalEntry = $("#entry").val();
  let journal = new Entry(journalTitle, journalEntry);
  let entryDate = journalTitle;
  let entry = journal.showEntry();
  let wordsOnly = journal.numberWords();
  let vowelCount = journal.numberVowels();
  let consonantCount = journal.numberConsonants();

  // Display to html
  $("#showEntryDate").append("<p>" + entryDate + "</p>");
  $("#showEntry").append("<p>" + entry + "</p>");
  $("#numWords").append("<p>" + wordsOnly + "</p>");
  $("#numVowels").append("<p>" + vowelCount + "</p>");
  $("#numConsonants").append("<p>" + consonantCount + "</p>");
});
