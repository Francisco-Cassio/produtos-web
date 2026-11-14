import { useEffect, useState } from 'react'
import styles from './styles/app.module.css'
import FilterableProductTable from './components/FilterableProductTable'
import { PRODUCTS } from './data/products'
import { Product } from './types'

const API_URL =
  import.meta.env.VITE_API_URL ||
  'https://produtos-api-gykj.onrender.com/api/products'

export default function App() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products')
        return res.json() as Promise<Product[]>
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data)
        }
      })
      .catch(() => {
        // Mantem dados locais caso a API ainda esteja iniciando
      })
  }, [])

  const inStockCount = products.filter((p) => p.stocked).length

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
          {inStockCount} de {products.length} em estoque
        </span>
      </header>
      <FilterableProductTable products={products} />
    </div>
  )
}
