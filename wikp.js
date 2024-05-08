#!/Users/heo001997/.nvm/versions/node/v16.18.0/bin/node

// Returns the paragraphs from a Wikipedia link, stripped of reference numbers.

let urllib = require("urllib");
let url = process.argv[2];

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

urllib.request(url, { followRedirect: true }).then(function(response) {
  console.log("Response status code:", response.status);
  let body = response.data.toString();
  // Simulate a Document Object Model.
  console.log(body)
  let { document } = (new JSDOM(body)).window;

  // Grab all the paragraphs and references.
  let paragraphs = document.querySelectorAll("p");
  let references = document.querySelectorAll(".reference");

  // Remove any references.
  references.forEach(function(reference) {
    reference.remove();
  });

  // Print out all of the paragraphs.
  paragraphs.forEach(function(paragraph) {
    console.log(paragraph.textContent);
  });
}).catch(function(error) {
  console.error("Error fetching data:", error);
});

