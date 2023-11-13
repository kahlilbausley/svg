import inquirer from "inquirer";
import fs from "fs";

let questions= [
    {
        name: "textlogo",
        message: "What text do you want on your logo?"
    },
    {
        name: "textcolor",
        message: "What color do you want your text?",

    },
    {
        name: "shape",
        message: "What shape do you want your text?",
        type: "list",
        choices:[

            "circle","triangle","square"
        ]

    },
    {
        name: "shapecolor",
        message: "What color do you want your shape?",

    }
];
inquirer.prompt(questions).then(function(answers){

    let shapetext="";
    if (answers.shape=="circle"){

        shapetext=`<circle cx="150" cy="100" r="80" fill="${answers.shapecolor}" />`;
    
    }

    if (answers.shape=="square"){

        shapetext=`<rect width="60%" height="85%" fill="${answers.shapecolor}" />`;


    }

    if  (answers.shape=="triangle"){

        shapetext=`<polygon points="200,10 100,200 300,200" style="fill:${answers.shapecolor};stroke:purple;stroke-width:1" />
        `;

    }
    let output=`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        ${shapetext} 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.textlogo}</text>

     
     </svg>`
    fs.writeFile("logo.svg",output,function(err,data){

        console.log("sucess");

    });
});
