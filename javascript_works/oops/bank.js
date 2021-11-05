class Bank {
    session={}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 10000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 },
                    // {to:1002,amount:1000}
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        }

    }
    validateAccountNumber(accno){
        return accno in this.accounts ?true:false
    }
    //            1001    userone
    authenticate(accno, password) {
            if(accno in this.accounts){
                    let pwd=this.accounts[accno].password
                    if(password==pwd){
                        // login success
                        this.session["user"]=accno
                        // session={"user":1001}
                        return 1;
                    }
                    else{
                        return 0;
                        // invalid password
                    }
            }
            else{
                return -1;// invalid account number
            }

    }
    balanceEnquiry(){

        if("user" in this.session){
            let user=this.session["user"] //1001
            return this.accounts[user].balance
        }
        else{
            console.log("u must login");
        }

    }
    
    fundTransfer(to_acno,amount){
        let user=this.session["user"]
        if(this.validateAccountNumber(to_acno)){
            let bal=this.balanceEnquiry()
            if(bal>amount){
                this.accounts[user].balance-=amount
                this.accounts[to_acno].balance+=amount
                this.accounts[user].transactions.push({to:to_acno,amount:amount})


               console.log(this.accounts[user])


            }
            else{
                console.log("insufficient balance");
            }


        }
        else{
            console.log("invalid toaccno");
        }

    }
    paymenthistiry(){
        let user =this.session["user"]
        console.log(this.accounts[user].transactions);

    }
    credittransaction(){
      let transaction=this.gettransaction()
      for(let trans of transaction){
          for(let tran of trans){
              if(tran.to==this.session["user"]){
                  console.log(tran);
              }
          }
      } 
    }


}

var obj=new Bank();
var user=obj.authenticate(1001,"userone")

obj.fundTransfer(1003,5000)