const inquirer = require  ("inquirer");
const fs = require ("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);
const qustions =[

        {
     type: "input",
     name: "username",
    message: "what is your username?"
     },
           
 {
    type: "input",
    name: "proName",
    message: "what is your projects name?"
                },

                {
    type: "input",
    name: "smallProject",
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
      name: "contRepo",
     message: "what does the user need to know about contributing to the repo?"
                                    },
                                ]
                                   
    


                                function init() {
                                    inquirer.prompt(qustions).then(function ({username}){

                                      const url = `https://api.github.com/users/${username}`;
                                      axios.get(url).then (function(res){
                                        console.log(res);
                                        
                                    })});


                                     // const html = generateHTML(response);

                                      //return writeFileAsync ("generateMarkdown.js",html )
                                    }

                                    //console.log("");



                                    

                                
                                
                                init();

//promtUser().then (function(answers)
            
