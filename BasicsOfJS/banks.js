

class BankAccount {
  constructor(accountNumber, holderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount");
      return;
    }

    this.balance += amount;
    console.log(`₹${amount} deposited into ${this.holderName}'s account (Acc No: ${this.accountNumber})`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient balance in ${this.holderName}'s account`);
      return;
    }

    this.balance -= amount;
    console.log(`₹${amount} withdrawn from ${this.holderName}'s account (Acc No: ${this.accountNumber})`);
  }

  checkBalance() {
    console.log(`Balance of ${this.holderName} (Acc No: ${this.accountNumber}) is ₹${this.balance}`);
  }
}




class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(holderName, initialBalance = 0) {
    const accNumber = Date.now(); // simple unique number
    const account = new BankAccount(accNumber, holderName, initialBalance);

    this.accounts.push(account);

    console.log(`\nAccount created for ${holderName}`);
    console.log(`Account Number: ${accNumber}`);
    console.log(`Initial Balance: ₹${initialBalance}\n`);

    return account;
  }

  transferMoney(sender, receiver, amount) {
    if (amount > sender.balance) {
      console.log("Transfer failed: insufficient balance");
      return;
    }

    sender.balance -= amount;
    receiver.balance += amount;

    console.log(`₹${amount} transferred from ${sender.holderName} (Acc: ${sender.accountNumber}) to ${receiver.holderName} (Acc: ${receiver.accountNumber})`);
  }
}




const bank = new Bank("My Bank");

const acc1 = bank.createAccount("Irene", 5000);
const acc2 = bank.createAccount("John", 3000);

acc1.deposit(1000);
acc1.withdraw(2000);

bank.transferMoney(acc1, acc2, 1500);

acc1.checkBalance();
acc2.checkBalance();