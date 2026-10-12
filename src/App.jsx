import './App.css';
function Header () {
  return  <h2>I am Amen Girma.</h2>;
}
function About() {
  return<p>I am a Computer Science student.</p>;
}
function Skills() {
  return (
    <div>
      <h3>My skills</h3>
  <p>HTML, CSS, JavaScript, and React</p>
  </div>
  );
}
function Projects() {
  return(
    <div>
      <h3> Projects</h3>
      <p>burger club</p>
      <p>Hospital Apointemnt and Patient Mangemnt System </p>
      <p>Ethiopian Movie Website</p>

    </div>
  );
}
 
function App(){
  return (
  <div>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
  </div>
  );
}
export default App;