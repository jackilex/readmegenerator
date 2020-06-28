// let list={
//     title: 'f',
//     description: 't',
//     installation: 'y',
//     usage: 'd',
//     license: 'APACHE',
//     contributing: 'd',
//     test: 'f',
//     questions: 'g',
//     contact: 'd'
//   }

//contructing the readme file with input
let lic;

const syncAndCreate= function(data){
    if (data.license=== 'MIT'){
         lic= `Copyright (c) ${new Date().getFullYear()}[Name]. All rights reserved.
        
        This work is licensed under the terms of the MIT license.  
        For a copy, see <https://opensource.org/licenses/MIT>.`
        }else{
         lic=`Copyright (c) ${new Date().getFullYear()} [Name]. All rights reserved.
        
        This work is licensed under the terms of the APACHE license.  
        For a copy, see <https://www.apache.org/licenses/LICENSE-2.0>.`
        }

let templateFile=`
# Read Me Template

### Table of Contents
- [Description](#description)
- [Installation](#how-to-use)
- [How To Use](#how-to-use)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
- [Contact](#contact)
- [License](#license)

---

## Description
${data.description}


---
## Installation
${data.installation}


[Back To The Top](#read-me-template)

---

## How To Use
${data.usage}

[Back To The Top](#read-me-template)

---
## Contribution
${data.contribution}

[Back To The Top](#read-me-template)

---

## Test
${data.test}

[Back To The Top](#read-me-template)

---

## Questions
- Github - https://github.com/${data.questions}
- Email Address - @${data.contact}

[Back To The Top](#read-me-template)

---

## License
${lic}

[Back To The Top](#read-me-template)
`
console.log(templateFile)
return templateFile
}

// syncAndCreate(list)
module.exports= {syncAndCreate}


