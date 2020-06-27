const fs = require('fs');
const fileName= process.argv[2]



let testing= 'good'
// this function create the files
let writeFIle= function (data){
    fs.writeFile(`${data}.md`,data, function(err) {
           if (err) throw err;
           return newFile=`${data}.md`
        });
   }


const questions= [
    {
      type:'input',
      name: 'title',
      message: 'What is the TITLE of your project',
    },
    {
        type:'input',
        name: 'description',
        message: 'DESCRIBE your project and what is its intent',
      },
      {
        type:'input',
        name: 'installation',
        message: 'explain the user how to and INSTALL your website or app',
      },
      {
        type:'input',
        name: 'usage',
        message: 'explain the user how to and USE your website or app',
      },
      {
        type:'input',
        name: 'installation',
        message: 'explain the user how to and install your website or app',
      },
      {
        type: 'list',
      name: 'license',
      message: 'chose a licence',
      choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0'],
      },
      {
        type:'input',
        name: 'contributing',
        message: 'List the names of all who contributed in this project',
      },
      {
        type:'input',
        name: 'test',
        message: 'explain the testing stage',
      },
      {
        type:'input',
        name: 'questions',
        message: 'enter your Github username for this section',
      },
      {
        type:'input',
        name: 'contact',
        message: 'enter your email address for this section',
      },

  ]

//exporting functions
module.exports={
writeFIle,
questions,


}