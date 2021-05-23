
// Pckages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
inquirer
  .prompt([

   { type: "input",
    message:"What is the title of your project?",
    name: "title",
},{
    type: "input",
    message:"What is your name?",
    name: "name",
},
{
    type: "input",
    message:"How many contributors are there in this project? Who are they ?",
    name: "contributors",
},{
    type: "input",
    message:"What was your motivation behind this project?",
    name: "motivation",
},{
    type: "input",
    message:"Why did you build this project?",
    name: "why",
},{
    type: "input",
    message:"What problem does this project solve?",
    name: "solve",
},{
    type: "input",
    message:"What did you learn?",
    name: "learn",
},{
    type: "input",
    message:"What makes your project stand out?",
    name: "standout",
},{
    type: 'input',
    message: 'github-link',
    name: 'gUsername',
},
{
    type: 'input',
    message: 'What is your email adress?',
    name: 'Email',
},
     {
        type: 'checkbox',
        name: 'tech',
        message: 'What technologies were used for this project?',
        choices: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node", "NPM"]
    },
   
  ])
    // this will return a promise 
  .then((answers) => {
    const readMeContent = generateMarkdown(answers); //this is our generateMarkdown method, which will return a template of string using our template.
    fs.writeFile("./readme", readMeContent, (err) => { err // using file system to write our readme file and also added an call back function, error.
        ? console.log(err)
        : console.log("Successfully generated README.md!")
    });
});
 