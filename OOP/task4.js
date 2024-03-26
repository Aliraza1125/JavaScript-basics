//Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
    constructor(accNum, balance) {
        this.accNum = accNum;
        this.balance = balance;
    }

    depositMoney(amount) {
        this.balance += amount;
        console.log(`After deposit, balance is ${this.balance}`);
    }

    withdrawMoney(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`After withdrawal, balance is ${this.balance}`);
        }
    }
}

const bankAccount1 = new BankAccount(2403, 40000);

bankAccount1.depositMoney(20000);
bankAccount1.withdrawMoney(10000);
