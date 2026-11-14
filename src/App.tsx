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
            <svg
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 20h5l5 18h16l4-13H24"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="28" cy="45" r="4" fill="#a7f3d0" />
              <circle cx="40" cy="45" r="4" fill="#a7f3d0" />
            </svg>
          </div>
          <div>
            <h1 className={styles.title}>Cássio's Market</h1>
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
