import {CartItem} from "./CartItem"
export function Cart(props) {
    return (<div>
        <h2 className="text-4xl dark:text-white font-bold mb-5">Cart</h2>
        <ul className="space-y-5">
            {props.cartItems.map(cartItem => <li key={cartItem.product.id}>
                <CartItem item={cartItem} onClickTrash={props.onClickTrash} />
            </li>)}
        </ul>

    </div>)
}