class Bank {
    createAccount() {
        let first_name = fname.value;
        let last_name = lname.value
        let acc_no = account_no.value
        let password = confirm_password.value
        let bal=balance.value

        let user = {
            first_name,
            last_name,
            acc_no,
            password,
            bal
        }
        localStorage.setItem(user.acc_no, JSON.stringify(user))
        location.href = "./2index.html"
        alert("account created")

    }
    validateAccount(account_no) {
        return account_no in localStorage ? true : false

    }

    authenticate() {
        let ac_no = account_no.value;
        let pwd = password.value;
        if (this.validateAccount(ac_no)) {
            let data = JSON.parse(localStorage.getItem(ac_no))
            if (pwd == data.password) {
                alert("login success")
                sessionStorage.setItem("user",ac_no)
                location.href = "./userhome.html"

            }
            else {
                alert("invalid password")
            }
        }

    }
    logout(){
        alert("Logged out")
        sessionStorage.removeItem("user")
        location.href="./2index.html"
    }
    
    balanceEnquiry(){
        let account_no=sessionStorage.getItem("user")
        let data=JSON.parse(localStorage.getItem(account_no))
        console.log(data)
        // let my_div=document.createElement("div") mydiv.innerHTML=`<p>available balance is ${data.balance}</p>`
        document.querySelector('#result').innerHTML=`<p>your available balance is ${data.bal}`
        // document.querySelector("body").append(mydiv)
        

    }

    getBalance() {
        let user_acno = sessionStorage.getItem("user")
        let data = JSON.parse(localStorage.getItem(user_acno))
        return Number(data.bal)
    }

    
    fundTransfer() {
        let to_accountnum = to_acno.value;
        let co_acno = c_acno.value;
        let amount =Number(amt.value);
        if (to_accountnum == co_acno) {
            if (this.validateAccount(co_acno)) {
                // console.log(this.getBalance(),amount);
                if (amount < Number(this.getBalance())) {
                    let user_acno = sessionStorage.getItem("user")

                    let payer_details = this.getAcccountDetails(user_acno)
                    let receiver_details = this.getAcccountDetails(co_acno)

                    receiver_details["bal"] += Number(amount)
                    localStorage.setItem(co_acno, JSON.stringify(receiver_details))

                    payer_details["bal"] -= Number(amount)
                    localStorage.setItem(user_acno, JSON.stringify(payer_details))
                    console.log(payer_details);
                    alert("payment success")
                }

                else {
                    alert("insufficient balance")
                }
            }
            else {
                alert("invalid account number")
            }
        }
        else {
            alert("account number mismatch")
        }
    }
    getAcccountDetails(acc_no) {
        return JSON.parse(localStorage.getItem(acc_no))
    }

}

    



var bank = new Bank();