const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);
const qustions = [

  {
    type: "input",
    name: "username",
    message: "what is your username?"
  },

  {
    type: "input",
    name: "title",
    message: "what is your projects name?"
  },

  {
    type: "input",
    name: "description",
    message: "write a small discription of your project."
  },
  {
    type: "input",
    name: "npm-i",
    message: "what command should be run for dependicies?"
  },
  {
    type: "input",
    name: "runTest",
    message: "what command should be run to run tests?"
  },

  {
    type: "input",
    name: "repo",
    message: "what should the user know about useing the repo?"
  },
  {
    type: "input",
    name: "license",
    message: "what license does the user need?"
  },


]




function init() {
  inquirer.prompt(qustions).then(function (response) {

    const url = `https://api.github.com/users/(response.username)`;
    axios.get(url).then(function (res) {
      console.log(res);
      const data = {
        username: response.username,
        title: response.title,
        description: response.description,
        tableOfContents: response.tableOfContents,
        installation: response.installation,
        usage: response.repo,
        tests: response.runTest,
        license: response.license,
        contributing: response.contributing,
        name: res.data.login,
        email: "itasghar786.com",
        profilePic: res.data.avatar_url,
      }

      //const html = generateHTML(data;

      return appendFileAsync("generateMarkdown.js", data.join('\n'));
    })
      .then(function () {
        return readFileAsync("generateMarkdown.js", "utf8");
      })
      .catch(function (err) {
        console.log(err)
      })

  });

}

//console.log("");







init();

//promtUser().then (function(answers)

