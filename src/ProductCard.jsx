function ProductCard(props){
    return(
        <div>
            // Props can pass different data types to a child component.
// name="mobile phone" passes a string.
// price={40000} passes a number.
// Curly braces allow us to pass JavaScript values in JSX.
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    );
}
export default ProductCard;