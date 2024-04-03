import style from './Item.module.css'
const Item = ({foodItem, bought, handleBuyButton}) => {
    // let {foodItem} = props
    // const handleBuyButton = (event) => {
    //     console.log(event)
    //     console.log(`${foodItem} being bought`)
    // }
    return (
        <li className={`list-group-item ${bought && 'active'}`} >
            {foodItem}
            <button 
              type="button"
              className={`${style.button} btn btn-dark`}
              onClick={handleBuyButton}>
                Buy
            </button>
        </li>
    )
}  

export default Item;