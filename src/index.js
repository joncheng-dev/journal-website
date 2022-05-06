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
