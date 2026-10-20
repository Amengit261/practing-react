function StudentCard({student}){

   return(
      <>
<h3>{student.name}</h3>
<h3>{student.department}</h3>
<h3>{student.university}</h3>
{student.skills.map((skills) => {
   return <h4 key={skills}>{skills}</h4>
   })}
   {student.map((onestudent) => {
      return<h3 key={onestudent}>{onestudent} </h3>
})}

</>
   );
}

export default StudentCard;