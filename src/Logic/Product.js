
export  class Product {
  constructor() {
    this.setReview(0);

           
  }
  SetInfo(category, name, prize, specification, Saleing){
    this.setCategory(category);
    this.setName(name);
    this.setPrize(prize);
    this.setSpecification(specification);
    this.setSaleing(Saleing);
    this.setReview(0);
    

  }
  setImage(image){
    this.image=image;

  }
  getImage(){
    return this.image;
  }
  setCategory(category) {
    this.category = category;
  }
  setName(name) {
    this.name = name;
  }
  setPrize(prize) {
    this.prize = prize;
  }
  setSpecification(specification) {
    this.sepcification = specification;
  }
  setSaleing(saling) {
    this.saling = saling;
  }
  setReview(review) {
    this.review = review;
  }
  getCategory() {
    return this.category;
  }
  getName() {
    return this.name;
  }
  getPrize() {
    return this.prize;
  }
  getSpecification() {
    return this.sepcification;
  }
  getSaling() {
    return this.saling;
  }
  getReview() {
    return this.review;
  }
  StringResult(){
      return "Category"+this.category; 
  }
  setMailID(email){
    this.email=email;
  }

setProdcutID(id){
  this.id=id
}
  setResult(){
    (async()=>{
                 let api=await fetch("/.netlify/functions/addProdcuts",{
                   method:"post",
                   body:JSON.stringify({
                     ProductName:this.name,
                    ProdcutCategory:this.category,
                    ProdcutPrize:this.prize,
                    ProdcutSpecification:this.sepcification,
                    ProductSalingType:this.saling,
                    "OwnerEmail":this.email,
                   " Review":this.review,
                  
                  
                    

                  })

                 })
                 let data =await api.json()
                console.log( "yup yup yup data : ", await data.ID);
                await this.setProdcutID(data.ID);


    })()
  }
}
