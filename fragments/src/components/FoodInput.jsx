import styles from './FoodInput.module.css'

const FoodInput = ({handleKeyDown}) => {
//    const handleOnChnage = (event) => {
//     console.log(event.target.value)
//    }

    return (
     <input type='text' placeholder='Enter Food Item here' 
    className={styles.foodInput}
    onKeyDown={handleKeyDown}
    />)
}

export default FoodInput;