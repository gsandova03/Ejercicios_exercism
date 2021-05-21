//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.state = false;
  }

  open() {
    if(this.state){
      throw new ValueError();
    }else{
      this.state = true;
      this.balanceAcc = 0;
    }
  }

  close() {
    if(!this.state){
      throw new ValueError;
    }else{
      this.state = false;
      this.balanceAcc = 0;
    }
  }

  deposit(addBalance) {
    if(!this.state || addBalance < 0){
      throw new ValueError();
    }else{
      this.balanceAcc = this.balanceAcc + addBalance;
    }
  }

  withdraw(resBalance) {
    if(!this.state || resBalance > this.balanceAcc || resBalance < 0){
      throw new ValueError();
    }else{
      this.balanceAcc = this.balanceAcc - resBalance;
    }
  }

  get balance() {
    if(!this.state){
      throw new ValueError();
    }else{
      return this.balanceAcc;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
