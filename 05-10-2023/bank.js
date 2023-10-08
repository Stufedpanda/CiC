class BankAccount {
    constructor(name, balance){
        this.accountHolderName = name,
        this.balance = balance
    }

    set deposit(amount) {
        this.balance += amount;
        console.log(`${amount} has been deposited.`)
    }

    set withdraw(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
            console.log(`${amount} has been withdrawn.`);
        }
        else{
            console.log(`${amount} exceeds account balance.`);
        }
    }

    get getBalance() {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    constructor(name, balance, minBal){
        super(name, balance)
        this.minimumBalance = minBal;
    }

    set withdraw(amount) {
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
            console.log(`${amount} has been withdrawn.`);
        }
        else{
            console.log(`${amount} exceeds minimum account balance.`);
        }
    }
}

class CheckingAccount extends BankAccount {
    constructor(name, balance, limit){
        super(name, balance);
        this.overdraftLimit = limit;
    }

    set withdraw(amount) {
        if (this.balance - amount >= -1 * this.overdraftLimit) {
            this.balance -= amount;
            console.log(`${amount} has been withdrawn.`);
        }
        else{
            console.log(`${amount} exceeds minimum account balance.`);
        }
    }
}

// Create a SavingsAccount for a user named "John Doe" with an initial balance of $1500 and a minimum balance requirement of $500.
const john = new SavingsAccount("John Doe", 1500, 500);
console.log(john)

// Try withdrawing an amount that would drop the balance below the minimum balance.
john.withdraw = 1200;

// Withdraw an acceptable amount and confirm the new balance.
john.withdraw = 800;
console.log(john.getBalance);

// Create a CheckingAccount for a user named "Jane Smith" with an initial balance of $500 and an overdraft limit of $300.
const jane = new CheckingAccount("Jane Smith", 500, 300);
console.log(jane);

// Attempt a withdrawal that exceeds the balance but stays within the overdraft limit.
jane.withdraw = 600;

// Try to withdraw an amount that exceeds both the balance and the overdraft limit.
jane.withdraw = 900;