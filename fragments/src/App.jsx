import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'

function App() {
   
  // let foodItems = ['Dal', 'Green Vegitable', 'Roti', 'Salad', 'Milk'];
  // let foodItems = [];
  // let  emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }
   
    // let [textToShow, setTextState] = useState();
    // console.log(`Current value of textState: ${textToShow}`)

  let [foodItems, setfoodItems] = useState(['Dal', 'Green Vegitable', 'Roti'])
   
  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]
      setfoodItems(newItems);
      console.log(newFoodItem);
    }
  }

  return (
  <>
    <Container>
      <div>Healthy Food</div>
      {/* {emptyMessage} */}
      {/* {foodItems.length === 0 && <h3>I am still hungry</h3> } */}
      <ErrorMessage items={foodItems}/>
      <FoodInput handleKeyDown={onKeyDown}/>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}/>
    </Container>
    {/* <Container>
      <p>Above is the list of healthy foods are good for your health and well being</p>
    </Container> */}
     </>
  )
}

export default App;
