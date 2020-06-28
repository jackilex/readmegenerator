const inquirer = require('inquirer');
const fs = require('fs');
const fileName= process.argv[2]
const mech= require('./mech.js')
const path=require('path')
const template= require('./template.js')


mech.writeFIle(fileName);



let inquire1= function(){
    inquirer
    .prompt(mech.questions)
    .then(answers => {
    // console.log(answers);
    let syncedFile= template.syncAndCreate(answers)
    return syncedFile
    })
    .then(syncedFile=>{
    fs.appendFile(newFile,syncedFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
  
    })
    
} 
  
//this function make sure the file is index that js is running th main functions synchronously
async function runThem(){
    if(fileName){
        let response= await inquire1();
       
    }
else{
    console.log('no files name was added as a parameter after node index.js')
}
}

runThem()




// fs.appendFile(newFile,JSON.stringify(answers), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
  