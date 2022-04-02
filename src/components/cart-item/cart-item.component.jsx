import "./cart-item.styles.scss";


const CartItem = ({shopItem}) => {

    const { name, quantity } = shopItem;

    return (
        <div className="item-container">
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;