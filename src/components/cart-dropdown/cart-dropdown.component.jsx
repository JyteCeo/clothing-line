import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItems from '../cart-items/cart-items.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (
                    <CartItems key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;