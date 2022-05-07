import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Entry from "./entries.js";

$(document).ready(function () {
  $("#journal-form").submit(function (event) {
    event.preventDefault();
    const journalTitle = $("#title").val();
    const journalEntry = $("#entry").val();
    const journal = new Entry(journalTitle, journalEntry);
    const entry = journal.showEntry();
    $("#showEntry").append("<p>" + entry + "</p>");
  });
});
