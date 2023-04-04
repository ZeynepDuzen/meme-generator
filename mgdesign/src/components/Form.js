import React from "react";


function Form(){

  const [firstName,setFirstName] = React.useState("");
  const [lastName,setLastName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [gsm,setGsm] = React.useState("");
  const [isComputer,setIsComputer] = React.useState(false);
  const [status,setStatus] = React.useState("");

  function handleFirstName(event){
     console.log(event.target.value);
     setFirstName(event.target.value);
  }

  function handleLastName(event){
     console.log(event.target.value);
     setLastName(event.target.value);
  }

  function handleEmail(event){
     setEmail(event.target.value);
     console.log(event.target.value);                         
  }

  function handleGsm(event){
    console.log(event.target.value);
    setGsm(event.target.value);
  }

  function handleCheckbox(event){
        console.log(event.target.checked); 
        setIsComputer(event.target.cheked);                  
  }

  function handleRadioButton(event){
     console.log(event.target.checked);
     setStatus(event.target.value);
     console.log(status);
  }

   return(
       <form>
           <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstName}
           /> 
           <input 
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastName}
           />
           <input 
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={handleEmail}
           />
           <input 
            type="number"
            placeholder="gsm"
            value={gsm}
            onChange={handleGsm}
           /> 
           <input
            type="checkbox"
            checked={isComputer}
            onChange={handleCheckbox}
           /> 
           <input 
            type="radio"
            value="fulltime"
            name="fulltime"
            checked={status}
            onChange={handleRadioButton}
           /> 
                         
       </form>                       
   )
}

export default Form;