#!/usr/bin/env node
import inquirer from "inquirer";
class Player {
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name
    }
    fueldecrease(){
        let fuel = this.fuel-25
        this.fuel=fuel 
    }
    fuelincrease(){
        this.fuel = 100
    }
}
class Opponent {
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name
    }
    fueldecrease(){
        let fuel = this.fuel-25
        this.fuel=fuel
    }
    
}

let player = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Please enter your good name!",
    }
])

let opponent = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Select your opponent!",
        choices:[{value:"Zombies"} , {value:"Actors"} , {value:"Alians"}]
    }
])

let p1= new Player(player.name)
let o1=new Opponent(opponent.select)

do{
    if(opponent.select== "Zombies"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do!",
                choices:[{value:"Attack"},{value:"Drink Portion"},{value:"Run for your life "}]
            }
        ]);
        if(ask.opt==="Attack"){
            let num  = Math.floor(Math.random()*2)
            if (num > 0){
                p1.fueldecrease()

                console.log(p1.name +"fuel is " + p1.fuel);
                console.log(o1.name + "fuel is "+ o1.fuel);
                if(p1.fuel<=0){
                    console.log("Died! BETTER LUCK NEXT TIME...");
                    process.exit()
                    
                }
            }
            if (num <= 0){
                o1.fueldecrease()
                console.log(p1.name +"fuel is " + p1.fuel);
                console.log(o1.name + "fuel is "+ o1.fuel);
                if(o1.fuel<=0){
                    console.log("CONGRATULATION!!! YOU WIN....");
                    process.exit()
                    
                }
            }
        } 
        if(ask.opt==="Drink Portion"){
            p1.fuelincrease()
            console.log("You Drink Health and Now your Health is " + p1.fuel);
            
        }
        if(ask.opt==="Run for your life"){
            console.log("You lose... BETTER LUCK NEXT TIME .....!");
            process.exit()
        }
    }

    //Actors
    if(opponent.select== "Actors"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do!",
                choices:[{value:"Attack"},{value:"Drink Portion"},{value:"Run for your life "}]
            }
        ]);
        if(ask.opt==="Attack"){
            let num  = Math.floor(Math.random()*2)
            if (num > 0){
                p1.fueldecrease()

                console.log(p1.name +"fuel is " + p1.fuel);
                console.log(o1.name + "fuel is "+ o1.fuel);
                if(p1.fuel<=0){
                    console.log("Died! BETTER LUCK NEXT TIME...");
                    process.exit()
                    
                }
            }
            if (num <= 0){
                o1.fueldecrease()
                console.log(p1.name +"fuel is " + p1.fuel);
                console.log(o1.name + "fuel is "+ o1.fuel);
                if(o1.fuel<=0){
                    console.log("CONGRATULATION!!! YOU WIN....");
                    process.exit()
                    
                }
            }
        } 
        if(ask.opt==="Drink Portion"){
            p1.fuelincrease()
            console.log("You Drink Health and Now your Health is " + p1.fuel);
            
        }
        if(ask.opt==="Run for your life"){
            console.log("You lose... BETTER LUCK NEXT TIME .....!");
            process.exit()
        }
    }

    //Alians
    if(opponent.select== "Alians"){
        let ask = await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do!",
                choices:[{value:"Attack"},{value:"Drink Portion"},{value:"Run for your life "}]
            }
        ]);
        if(ask.opt==="Attack"){
            let num  = Math.floor(Math.random()*2)
            if (num > 0){
                p1.fueldecrease()

                console.log(p1.name +"fuel is " + p1.fuel);
                console.log(o1.name + "fuel is "+ o1.fuel);
                if(p1.fuel<=0){
                    console.log("Died! BETTER LUCK NEXT TIME...");
                    process.exit()
                    
                }
            }
            if (num <= 0){
                o1.fueldecrease()
                console.log(p1.name +"fuel is " + p1.fuel);
                console.log(o1.name + "fuel is "+ o1.fuel);
                if(o1.fuel<=0){
                    console.log("CONGRATULATION!!! YOU WIN....");
                    process.exit()
                    
                }
            }
        } 
        if(ask.opt==="Drink Portion"){
            p1.fuelincrease()
            console.log("You Drink Health and Now your Health is " + p1.fuel);
            
        }
        if(ask.opt==="Run for your life"){
            console.log("You lose... BETTER LUCK NEXT TIME .....!");
            process.exit()
        }
    }

    
}
while(true)




