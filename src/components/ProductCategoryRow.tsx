import { Product } from '../types'
import styles from './ProductCategoryRow.module.css'

interface ProductCategoryRowProps {
  category: Product['category']
}

const CATEGORY_ICONS: Record<string, string> = {
  Fruits: '🍎',
  Vegetables: '🥬'
}

export default function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  const icon = CATEGORY_ICONS[category] ?? '📦'

  return (
    <tr>
      <th colSpan={2} className={styles.categoryHeader}>
        <span className={styles.categoryContent}>
          <span aria-hidden="true">{icon}</span>
          <span>{category}</span>
        </span>
      </th>
    </tr>
  )
}
