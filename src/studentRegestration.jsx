import { useState } from "react";
function StudentRegestration(){
    const [name, setName]=
    useState("");
    const [email, setEmail]=
    useState("");
    const[department, setDepartment]=
    useState("");
    const [error, setError] = useState("");
    function handleSubmit(event){
 event.preventDefault();
 if(name===""){
setError("Please enter your name!");
} else if(email===""){
setError("Please enter your email!");

 } else if(department===""){
setError("Please enter your departemnt!");

 } else 
    setError("");
    setName("");
    setEmail("");
    setDepartment("");
    
 
    
    }

   

    return (
        <>
        <h1>Student Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <label for ="Full Name">
       <input
       value = {name} 
       onChange ={(event) =>
        setName(event.target.value) }
    placeholder="Enter your name"
     /> </label>
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
        <p>{error}</p>
        <button  type="submit">Register</button>
        </form>
        </>
    );
}
export default StudentRegestration;