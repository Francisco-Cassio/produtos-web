import { Product } from '../types'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import styles from './ProductTable.module.css'

interface ProductTableProps {
  products: Product[]
  filterText: string
  inStockOnly: boolean
}

export default function ProductTable({
  products,
  filterText,
  inStockOnly
}: ProductTableProps) {
  const rows: JSX.Element[] = []
  let lastCategory: string | null = null

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      )
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Name</th>
            <th className={styles.headerCellRight}>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={2} className={styles.emptyState}>
                No products found matching your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
