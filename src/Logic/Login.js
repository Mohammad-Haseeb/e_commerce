import { EnteryType } from "./EnteryType";

export class Login extends EnteryType {
  constructor(email, password) {
    super();
    this.setEmail(email);
    this.setPassword(password);
  }
  setEmail(email) {
    this.email = email;
     (async()=>{
      let Loginapi=await fetch("/.netlify/functions/loginFunction",{
        method:'post',
        body:JSON.stringify({mail:this.email})

      });
      let x=await Loginapi.json()

      try{
      
         console.log("MY PASSWORD TYPER :" ,this.password())
         console.log("login  check",await x.password, " AND Status", x.status)
             
          // if(await x.password===this.getPassword()){
          //   if(x.status==="Buyer"){
          //     this.reuslt="products";
          //   }
          //   else if(x.status==="Seller"){
          //     this.reuslt="addproduct";
          //   }
          //   else{
          //     this.reuslt="/"
          //   }
             
          //    console.log(await "Hello ",x.status);
          // }
          // else{
          //   this.reuslt= "/";
          // }


        }
        catch(error){
          // this.reuslt= "NOt found"
          this.reuslt= "/"
        }
        try{
         console.log(await "RESULT FINDER ", x.password );
         console.log(await "INNER ", this.getPassword());
         if(await x.password===this.getPassword()){
          if(await x.status==="Buyer"){
            this.reuslt="products";
          }
          else if (await x.status==="Seller"){
            this.reuslt="addproduct";
          }
          else  {
             this.reuslt="/"
          }
           
           console.log(await "Hello ",x.status);
           console.log(await "RESUTL : ",this.reuslt)
        }
      }catch(error){
        this.reuslt="/"
      }



     })()

  }
  setPassword(password) {
    this.password = password;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }

  async getResult(){
    return this.reuslt
  }
}
