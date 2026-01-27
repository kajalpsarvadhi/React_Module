import {useState} from'react';

interface Item{
    id:number;
    name:string;
    price:number;

}
interface cartItemProps{
    item:Item;
    onRemove:(id:number)=>void
}


const CartItem =({item,onRemove}:cartItemProps)=>{
    return(
        <div>
        <span>{item.name}</span>
        <strong style={{ marginRight: '15px' }}>{item.price.toFixed(2)}</strong>
        <button 
            onClick={() => onRemove(item.id)}
        >
        Delete
        </button>
        </div>
    )
}

interface CartListProps{
    items:Item[];
    onDeleteItem:(id:number)=>void;
}


const CartList = ({items,onDeleteItem}:CartListProps)=>{
    return(
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
            <h3>
                Your Items
            </h3>
            {items.length>0?(
                items.map((item)=>(
                    <CartItem key={item.id} item={item} onRemove={onDeleteItem}></CartItem>
                ))
            ):(<p>Your cart is empty.</p>)}

        </div>
    )
}

const Store = (()=>{
    const [cartItems,setCartItems] = useState<Item[]>([
        { id: 1, name: 'Wireless Mouse', price: 25.99 },
        { id: 2, name: 'Mechanical Keyboard', price: 89.50 },
        { id: 3, name: 'Monitor Stand', price: 45.00 },
    ])

    const addItem = () => {
        const newItem: Item = {
            id: Date.now(), 
            name: "New Gadget " + (cartItems.length + 1),
            price: Math.floor(Math.random() * 100) + 1
        };
        setCartItems([...cartItems, newItem]);
    };

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalCost = cartItems.reduce((acc,item)=>acc+item.price,0);
    return(
        <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <h1>Gadget Store</h1>

            <button 
                onClick={addItem}
            >
                + Add Random Item
            </button>
            <CartList items={cartItems} onDeleteItem={removeItem} />
            <div style={{ marginTop: '15px', textAlign: 'right' }}>
                <strong>Total: {totalCost.toFixed(2)}</strong>
            </div>
        </div>
    )
})

export default Store;
