import { EnteryType } from "./EnteryType";

export class Register  extends EnteryType {

    constructor(userType, name, email, password, phoneNumber, CreditCardNumber) {
        super(userType);
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
        this.setPhoneNumber(phoneNumber);
        this.setCreditCardNumber(CreditCardNumber);
    }

   setName(name) {
        this.name = name;
    }

   setEmail(email) {
        this.email = email;
    }
   setPassword(password) {
        this.password = password;
    }
   setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
   setCreditCardNumber(CreditCardNumber) {
        this.CreditCardNumber = CreditCardNumber;
    }

     getName() {
        return this.name;
    }

     getEmail() {
        return this.email;
    }
     getPassword() {
        return this.password;
    }
     getPhoneNumber() {
        return this.phoneNumber;
    }
     getCreditCardNumber() {
        return this.CreditCardNumber;
    }

    sendData(){
        (async()=>{
            let x=   await fetch("/.netlify/functions/userRegister",{
              method:"post",
              body:JSON.stringify({Name:this.getName(),
                                    email:this.getEmail(),
                                    status:this.getuserType(),
                                    password:this.getPassword(),
                                    phoneNumber:this.getPhoneNumber(),
                                    CreditCardNumber:this.getCreditCardNumber()
                                   })
            })
            console.log("CHECK :",x);
          })()
    }
}
