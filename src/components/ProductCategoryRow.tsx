import { Product } from '../types'
import styles from './ProductCategoryRow.module.css'

interface ProductCategoryRowProps {
  category: Product['category']
}

export default function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2} className={styles.categoryHeader}>
        {category}
      </th>
    </tr>
  )
}