import { Product } from '../types'
import styles from './ProductRow.module.css'

interface ProductRowProps {
  product: Product
}

const PRODUCT_ICONS: Record<string, string> = {
  Apple: '🍎',
  Dragonfruit: '🐉',
  Passionfruit: '🥭',
  Spinach: '🥬',
  Pumpkin: '🎃',
  Peas: '🫛'
}

export default function ProductRow({ product }: ProductRowProps) {
  const icon = PRODUCT_ICONS[product.name] ?? '🥗'

  const name = product.stocked ? (
    <span className={styles.inStockName}>{product.name}</span>
  ) : (
    <span className={styles.outOfStock}>{product.name}</span>
  )

  return (
    <tr className={styles.row}>
      <td className={styles.nameCell}>
        <div className={styles.productInfo}>
          <span className={styles.iconBox} aria-hidden="true">
            {icon}
          </span>
          {name}
          <span
            className={
              product.stocked ? styles.badgeInStock : styles.badgeOutOfStock
            }
          >
            {product.stocked ? 'In stock' : 'Out of stock'}
          </span>
        </div>
      </td>
      <td className={styles.priceCell}>
        <span className={styles.priceTag}>{product.price}</span>
      </td>
    </tr>
  )
}
