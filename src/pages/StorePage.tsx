import Store from "./NestedComponents"
import { ProductItem } from "./ProductItem"
import { ProductSearch } from "./ProductsSearch"
import type { Product } from '../utils/types'

const StorePage = () => {
    const inventory: Product[] = [{ id: 'p1', name: 'Keyboard', price: 120, status: 'in-stock', size: 34 },
    { id: 'p2', name: 'Mouse', price: 45, status: 'low-stock', size: 12 },
    { id: 'p3', name: 'Monitor', price: 350, status: 'out-of-stock', size: 21 }]

    const handlePurchase = (id: string) => {
        alert(`Product ${id} added to cart!`)
    }

    return (
        <div>
            <h1>Store Inventory</h1>
      {inventory.map((product)=>(
        <ProductItem 
          key = {product.id}
          item ={product}
          onAddToCart={handlePurchase}
        />
      ))}

      <ProductSearch/>
      <Store/>
        </div>
    )
}

export default StorePage