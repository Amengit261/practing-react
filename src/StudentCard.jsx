function StudentCard(props){
    return(
       <>
       <h2>{props.name}</h2>
       <h3>{props.department}</h3>
       <h2>{props.university}</h2>
       {/* Display each skill from the array */}
     { props.skills.map((skills) => {
        return <p key={skills}>{skills}</p>

    
       } )}



       </> 
    
);
}
export default StudentCard;