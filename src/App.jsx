import ProductCard from "./ProductCard";
import StudentCard from "./StudentCard";


function App(){
  return(
    <div>
    {/* Props (properties) are data passed from a parent component to a child component in React
 They make components reusable by allowing us to pass different data to the same component.*/}
    <ProductCard  name="mobile phone"  price={20000}   />
    <ProductCard  name="Laptop"  price={40000}   />
    <StudentCard name="Hana" department="computer sience"university="Areb Minch"/>
    <StudentCard  name="Zele" department="Softer engener" university="Areb Minch"/>
    <StudentCard name="Amen" department="IT" university="Areb Minch" skills={["HTML","JAVASCRIPT","CSS"]}/>
{/* Pass an array containing the student's programming skills. */}
    {/*Strings represent text.We can pass strings through props using quotation marks.
The child component accesses the values using props.propertyName*/ }
</div>
  );
}
export default App;