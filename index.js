const inquirer = require('inquirer');
const fs = require('fs');
const fileName= process.argv[2]
const mech= require('./mech.js')
const path=require('path')

mech.writeFIle(fileName);


let inquire1= function(){
    inquirer
    .prompt(mech.questions)
    .then(answers => {
    console.log(JSON.stringify(answers, null, '  '))
    });
} 
  

async function runThem(){
    if(fileName){
        let response= await inquire1()  
    }
else{
    console.log('no files')
}
}

runThem()
