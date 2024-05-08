module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    let nonPunctuationContent = (this.content.match(/[a-z]/gi) || []).join('');
    let lowercaseContent = nonPunctuationContent.toLowerCase();
    return lowercaseContent;
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent().length > 0 &&
      (this.processedContent() === this.processedContent().reverse());
  }
}
