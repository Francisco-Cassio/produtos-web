import styles from './styles/app.module.css'
import FilterableProductTable from './components/FilterableProductTable'
import { PRODUCTS } from './data/products'

export default function App() {
  const inStockCount = PRODUCTS.filter((p) => p.stocked).length

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brandGroup}>
          <div className={styles.logoBadge} aria-hidden="true">
            🌿
          </div>
          <div>
            <h1 className={styles.title}>FreshMarket</h1>
            <p className={styles.subtitle}>Catálogo de Produtos Naturais</p>
          </div>
        </div>
        <span className={styles.stockCounter}>
          {inStockCount} de {PRODUCTS.length} em estoque
        </span>
      </header>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}
