const ErrorMessage = ({items}) => {
    // let foodItems = ['Dal', 'Green Vegitable', 'Roti', 'Salad', 'Milk'];
    return (<>{
        items.length === 0 && <h3>I am still hungry.</h3>
    }</>)
}

export default ErrorMessage;