import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';



const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;

    const { clearCartItems, addItemToCart, removeFromCart } = useContext(CartContext);
    const clearItemHandler = () => clearCartItems(cartItem);
    const increaseCartItem = () => addItemToCart(cartItem);
    const decreaseCartItem = () => removeFromCart(cartItem)
    

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'> 
            <div className='arrow' onClick={decreaseCartItem}>
                &#10094;
            </div>
            <span className='value'> {quantity} </span>
            <div className='arrow' onClick={increaseCartItem}>
                &#10095;
            </div>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
