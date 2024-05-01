#! /usr/env node

import inquirer from "inquirer"

let number: number = Math.floor((Math.random()*4)+1);

let user = await inquirer.prompt({

    type: 'number',
    name: 'guessing',
    message: 'name a number between 1-4'

})

if(user.guessing === number){
    console.log("Congratulation you gussed it!")

}else{
    console.log(`Sorry Try again the answer is incorrect the correct answer is: ${number}`);
}