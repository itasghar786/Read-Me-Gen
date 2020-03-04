function generateMarkdown(data) {
    return `
  # ${data.title}
  # ${data.Description}
  # ${data.tableOfContents}
  # ${data.installation}
  # ${data.usage}
  # ${data.license}
  # ${data.contributing}
  # ${data.tests}
  # ${data.questions}

  consol.log("data");

  `;
  }
  
  module.exports = generateMarkdown;




  