import { Product } from '../types'
import styles from './ProductRow.module.css'

interface ProductRowProps {
  product: Product
}

export default function ProductRow({ product }: ProductRowProps) {
  const name = product.stocked ? product.name : (
    <span className={styles.outOfStock}>{product.name}</span>
  )

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}