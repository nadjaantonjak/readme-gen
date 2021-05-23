
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(answers) {
    return `# ${answers.title}  (SAMPLE README)
 
 
  ## What is the title of your project?? :thumbsup:
  \`\`\`
  ${answers.title}
  \`\`\`

  ## How many contributors are there in this project? Who are they ?:thumbsup:
  \`\`\`
  ${answers.contributors}
  \`\`\`

  ## What was your motivation? :thumbsup:
  \`\`\`
  ${answers.motivation}
  \`\`\`

  ## Why did you build this project? :thumbsup:
  \`\`\`
  ${answers.why}
  \`\`\`

  ## What problem does this project solve? :thumbsup:
  \`\`\`
  ${answers.solve}
  \`\`\`

  ## What did you learn? :thumbsup:
  \`\`\`
  ${answers.learn}
  \`\`\`

  ## What makes your project stand out? :thumbsup:
  \`\`\`
  ${answers.standout}
  \`\`\`

  
 
  ## Technologies used :computer:
  \`\`\`
  The following technologies are used: ${answers.tech}
  \`\`\`
  
  
  ## Contact me :link:
  * Link to my GitHub profile: [${answers.name} profile](https://github.com/${answers.gUsername})
  * Visit my GitHub repo: [Repo](https://github.com/${answers.gUsername}/${answers.title})
  * Reach me with additional questions: ${answers.email} 
  ## Deployed URL :link:
  Click the link to visit the deployed webpage: https://${answers.gUsername}.github.io/${answers.title}/
  ## Wireframe/branching tree
  ![Wireframe](/assets/images/wireframe-${answers.title}.png)
  ## Screenshot landing page
  ![Landing Page](/assets/images/${answers.title}-landing-page.png)
  ---
  © 2021 [${answers.name}](https://github.com/${answers.gUsername}) Confidential and Proprietary. All Rights Reserved`;
  }
  
  module.exports = generateMarkdown;