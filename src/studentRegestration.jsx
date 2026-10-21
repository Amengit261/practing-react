import { useState } from "react";
function StudentRegestration(){
    const [name, setName]=
    useState("");
    const [email, setEmail]=
    useState("");
    const[department, setDepartment]=
    useState("");
    function handleSubmit(event){
 event.preventDefault();
 if(name===""){
alert("Please enter your name!");
}
 if(email===""){
alert("Please enter your email!");

 }
  if(department===""){
alert("Please enter your department");

 }
    
    }

   

    return (
        <form onSubmit={handleSubmit}>
       <input
       value = {name} 
       onChange ={(event) =>
        setName(event.target.value) }
    placeholder="Enter your name"
     /> 
      <input
       value = {email} 
       onChange ={(event) =>
        setEmail(event.target.value) }
    placeholder="Enter your email"
     /> 
     <input
     value={department}
     onChange={(event)=>
        setDepartment(event.target.value)}
        placeholder="Enter your Departemnt"
        /> 
        <button  type="submit">Register</button>
        </form>
    );
}
export default StudentRegestration;