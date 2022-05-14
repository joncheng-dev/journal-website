// Imports
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Entry from "./entries.js";

// User interface logic
let rowId = 0;
$("#journal-form").submit(function (event) {
  event.preventDefault();
  let journalTitle = $("#title").val();
  let journalEntry = $("#entry").val();
  let journal = new Entry(journalTitle, journalEntry);
  let entryTitle = journalTitle;
  let entry = journal.showEntry();
  let wordsOnly = journal.numberWords();
  let vowelCount = journal.numberVowels();
  let consonantCount = journal.numberConsonants();
  let teaser = journal.getTeaser();
  // Newly added. Append rows to table.
  $("#tableBody").append(
    "<tr><td class='row-index text-center'><p>" +
      entryTitle +
      "</p></td>" +
      "<td class='text-center'><p>" +
      teaser +
      "</p></td>" +
      "<td class='text-center'><p>" +
      entry +
      "</p></td>" +
      "<td class='text-center'><p>" +
      wordsOnly +
      "</p></td>" +
      "<td class='text-center'><p>" +
      vowelCount +
      "</p></td>" +
      "<td class='text-center'><p>" +
      consonantCount +
      "</p></td></tr>"
  );
});
