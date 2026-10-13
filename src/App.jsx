import './App.css';
function  Students ({ name,passed,}){
return(

  <div>
    <h2>Name:{name}</h2>
    <p>result:{passed?"passed":"Failed"}</p>

      {!passed&& <p>Congratulations!</p>}
</div>
);
}
function App(){
  return(
    <div>
    <Students name="Amen" passed={true}/>
    <Students name="zele" passed={true}/>
    <Students name="fkr" passed={false}/>
</div>
  );
}
export default App;