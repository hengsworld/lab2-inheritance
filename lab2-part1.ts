
// Write a TypeScript class in the *lab1-part1.ts* file that satisfies the following requirements:

// * Has a constructor with the following parameters
// 	* initialBalance (a number)
// 	* ownerName (a string)
// * Saves those parameters as private fields in your class
// * Has a **deposit** method which takes a number amount as a parameter and adds it to your account's balance
// * Has a **withdraw** method which takes a number amount as a parameter and subtracts it to your account's balance
// * Has a **checkBalance** method which prints out the current balance of the account and the account owner's name (pro tip: ES6 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) make this a bit cleaner)

// Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

// When you are done with this step, commit your changes to git for this file.

class CheckingAccount{

    private initialBalance: Number; 
    private ownerName: String;
    private amount: number;

    constructor(initialbalance, ownerName){
        this.initialBalance = initialbalance; 
        this.ownerName = ownerName
    }
    deposit(amount){
        this.initialBalance = this.initialBalance + amount;
         

    }
    withdraw(amount){
        this.initialBalance = this.initialBalance - amount;
    }
    checkBalance(amount){
        console.log(`${this.ownerName} account balance: $${this.initialBalance}`);
    }
}

let check = new CheckingAccount(2000,"heng")
check.deposit(200,"adfe ");