//All bank accounts have Deposit, Withdraw, Balance
abstract class BankAccount {
    welcomeMessage():void{
        console.log('Welcom to My Bank');
    }
    abstract deposit();
    abstract withdrawal();
    abstract balance();
}

class SavingAccount extends BankAccount{
    deposit(){

    }
    withdrawal(){

    }
    balance(){

    }
}

class CurrentAccount extends BankAccount{
    deposit(){

    }
    withdrawal(){

    }
    balance(){

    }
}

//we will create a saving account and current account from abstract class
//cannot withdraw more than 20000 per day from saving
//No limit to withdraw from current account