import type { Product } from "../utils/types";

interface ProductItemProps{
    item:Product;
    onAddToCart: (productId: string)=>void;
}

export const ProductItem = ({item, onAddToCart}: ProductItemProps)=>{
    const statusColor = item.status === 'out-of-stock'?'red':'green';
    return(
        <div style ={{border:'1px solid #ddd',margin:'10px',padding:'15px'}}>
            <h3>{item.name}</h3>
            <p>Price: {item.price.toFixed(2)}</p>
            <p>Size:{item.size}</p>
            <p style = {{color:statusColor}}>Status:{item.status}</p>

            <button disabled={item.status ==='out-of-stock'}
            onClick={()=>onAddToCart(item.id)}>
                {item.status === 'out-of-stock'?'Sold Out':'Add to Cart'}
            </button>
        </div>
    )
};