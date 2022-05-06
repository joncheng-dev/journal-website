function Entry(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
}

Entry.prototype.showEntry = function () {
  return "Show journal entry here!";
};
