import React from "react";
import "../styles/Signup.css";

function Signup(){

   const [email,setEmail] = React.useState("");
   const [password,setPassword] = React.useState("");
   const [passwordConfirm,setPasswordConfirm] = React.useState("");
   const [isJoin,setIsJoin] = React.useState(false);
   
   function handleEmail(event){
      console.log(event.target.value);                        
      setEmail(event.target.value);
   }
   function handleSubmit(event){
      event.preventdefault();
      console.log(event);
   }
   function handlePassword(event){
     console.log(event.target.value);
     setPassword(event.target.value);
   }
   function handlePasswordConfirm(event){
    console.log(event.target.value);
    setPasswordConfirm(event.target.value);
   }
   function handleCheckBox(event){
    console.log(event.target.checked);
    setIsJoin(event.target.checked);
   }
   function handleSubmit(event){
    event.preventDefault();
    if(password === passwordConfirm){
       alert("Successfully registered");                       
    }
    else{
       alert("Passwords do not match");                       
    }
  }


   return(
      <>
      <div className="form-container">
       <form className="form" onSubmit={handleSubmit}>
        <input 
         type="email"
         placeholder="Email address"
         className="form--input"
         value={email}
         onChange={handleEmail}
         name="email"
        />
        <input
         type="password"
         placeholder="Password"
         className="form--input"
         name="password"
         value={password}
         onChange={handlePassword}
        />
        <input
         type="password"
         placeholder="Password Confirm"
         className="form--input"
         name="passwordConfirm"
         value={passwordConfirm}
         onChange={handlePasswordConfirm} 
        />
        <input
         type="checkbox"
         checked={isJoin}
         onChange={handleCheckBox}
        />
        <label>I want to join newsettler</label>
        <br/>
        <br/>
        <button className="form--submit">Submit</button>
        </form>
      </div>
      </>                        
   )
}

export default Signup;