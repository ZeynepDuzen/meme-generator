import React from "react";


function Form(){

  const [firstName,setFirstName] = React.useState("");
  const [lastName,setLastName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [gsm,setGsm] = React.useState("");
  const [isComputer,setIsComputer] = React.useState(false);
  const [status,setStatus] = React.useState(false);
  const [music,setMusic] = React.useState();

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
      }
  function handleSelectOption(event){
     setMusic(event.target.value);
  }
  function handleSubmmit(event){
    event.preventDefault(); 
    console.log(event);                         
  }
     
  console.log(music);

   return(
       <form onSubmit={handleSubmmit}>
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
            checked={status === "fulltime"}
            onChange={handleRadioButton}
           />
           <label>Full Time</label> 
           <input 
            type="radio"
            value="parttime"
            name="parttime"
            checked={status === "parttime"}
            onChange={handleRadioButton}
           />              
           <label>Part Time</label>
           <input 
            type="radio"
            value="freelance"
            name="freelance"
            checked={status === "freelance"}
            onChange={handleRadioButton}
           />
           <label>Freelance</label>

           <br/>
           <br/>

           <label>What is your favorite music?</label>
           <select
               value={music}
               onChange={handleSelectOption}
               name="music"
           >
               <option value="rain">Sound of Rain </option>               
               <option value="piano">Sound of Piano </option>               
               <option value="violin">Sound of Violin</option>               
           </select>
          <button>Submit</button>
          </form>                       
   )
}

export default Form;