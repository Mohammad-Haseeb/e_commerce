import React,{useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import productStlye from './addProduct.module.css';
import {AddProdcut} from './../../Logic/Main'
import {login} from './../../Logic/Main';



const SelectStyling = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const AddProductForm = () => {
  const [imageState, setimageState] = useState();
  const productList = [
    "Electronic Devices",
    "Electronic Accessories",
    "TV & Home Appliances",
    "Health & Beauty",
    "Babies & Toys",
    "Groceries & Pets",
    "Home & Lifestyle",
    "Women's Fashion",
    "Men's Fashion",
    "Watches",
    "Bags & Jewelery",
    "Automotive & Motorbike",
  ];
  
  
   let handleUploadClick = event => {
     if(event.target.files!=null){
    let files=event.target.files;
    let reader=new FileReader();
    reader.readAsDataURL(files[0])
   reader.onload=(e)=>{
    console.log("EVENT ", e.target.result);
    setimageState(e.target.result.toString());
   }
  
   }
   else{
    alert("hello")
  }
  
   

  }
  
  const SelectStylingClasses = SelectStyling();
  return (
    <Formik
      initialValues={{
        ProductName: "",
        prize: "",
        description: "",
        SalingType: "",
        ProdcutCategory: "",
        file:"",
      
      }}
      validationSchema={Yup.object({
        ProductName: Yup.string()
          .max(20, "Must be 15 characters or less")
          .required("Required"),
        prize: Yup.string()
          .max(6, "Must be 6 Numbers or less")
          .required("Required"),
        description: Yup.string()
          .max(1000, "Maximum 1000 words or less")
          .required("Required"),
        SalingType: Yup.string().required("Required"),
        ProdcutCategory: Yup.string().required("Reuired"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const fd =new FormData();
        fd.append("image",values.image);

         console.log("FD : ", fd);
          // console.log(values);
        values.image=imageState
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        // alert(values.ProductName)
        AddProdcut.setMailID(login.email);
         AddProdcut.SetInfo(values.ProdcutCategory, values.ProductName, values.prize, values.description, values.SalingType,imageState);
         console.log(AddProdcut.category);
         console.log("TRIPLE CHECK  : ",AddProdcut.image);
         AddProdcut.setResult()
        // console.log({ 
        //   fileName: values.file.name, 
        //   type: values.file.type,
        //   size: `${values.file.size} bytes`
        // })

      }}
    >
      <Form>
      
     <div className={productStlye.mainContainer}>
       <div className={productStlye.innerContainer}>
         
      
       <div>
        <Field
          as={TextField}
          id="standard-basic"
          name="ProductName"
          type="text"
          label="Product Name"
          variant="filled"
          helperText={<ErrorMessage name="ProductName" />}
        />
        </div>

         <div>
                  <Field
          as={TextField}
          id="standard-basic"
          name="prize"
          type="number"
          label="Prize"
          variant="filled"
          helperText={<ErrorMessage name="prize" />}
        />
        </div>

    <div>      
        <FormControl
          variant="filled"
          className={SelectStylingClasses.formControl}
        >
          <InputLabel id="demo-simple-select-filled-label">
            Saling Type
          </InputLabel>
          <Field
            as={Select}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            name="SalingType"
            
            helperText={<ErrorMessage name=" SalingType" />}
          >
            <MenuItem value={"Flash Sale"}>Flash Sale</MenuItem>
            <MenuItem value={"Normal Sale"}>Normal Sale</MenuItem>
          </Field>

          <FormHelperText>
            <ErrorMessage name="SalingType" />
          </FormHelperText>
        </FormControl>
        </div>
        <div>        <FormControl
          variant="filled"
          className={SelectStylingClasses.formControl}
        >
          <InputLabel id="demo-simple-select-filled-label">
            Product Category
          </InputLabel>
          <Field
            as={Select}
            id="demo-simple-select-filled"
            name="ProdcutCategory"
          >
            {productList.map((prodcuts) => {
              return <MenuItem value={prodcuts}>{prodcuts}</MenuItem>;
            })}
          </Field>
          <FormHelperText>
            <ErrorMessage name="ProdcutCategory" />{" "}
          </FormHelperText>
        </FormControl>
        </div>

       <div>
        <Field
          as={TextField}
          id="standard-basic"
          name="description"
          type="text"
          variant="filled"
          label="Product Description"
          style={{width:"100%"}}         
          multiline
          helperText={<ErrorMessage name="description" />}
        />
     
     </div>
     <div >

     {/* <Input
              accept="image/*"
              className={Uploadclasses.input}
              id="contained-button-file"
              type="file"
            
              
              onChange={handleUploadClick}
              required
            />
            <label htmlFor="contained-button-file">
              Upload
            </label> 
            */}
            <input id="file" name="file" type="file"  onChange={handleUploadClick}  required/>
</div> 
     
     <div>
               <button type="submit">Submit</button>
               </div>

        </div>

</div>
       
<img src={imageState} alt="nope"/>

      </Form>
    </Formik>
  );
};


